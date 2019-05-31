//index.js
//获取应用实例
const app = getApp()
const global_variable = require('../../utils/global_variable.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // this.getSession()
    if (app.globalData.userInfo) {
      console.log(app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          
          // wx.request({
          //   url: 'http://127.0.0.1:8080/user/sentVerifyEmail',
          //   data: {
              
          //   },
          // })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    var that=this
    if (e.detail.rawData){
      console.log(1)
      app.globalData.userInfo = e.detail.userInfo
      that.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      var rawData = e.detail.rawData
      var encryptedData = e.detail.encryptedData
      var iv = e.detail.iv
      wx.request({
        url: global_variable.url + '/user/decodeUserInfo',
        data: {
          encryptedData: encryptedData,
          iv: iv,
          sessionId: wx.getStorageSync("sessionId")
        },
        success: function (res) {
          console.log(res)
          if (wx.getStorageSync('fromdetails') == true) {
            var productId = wx.getStorageSync('productId')
            wx.showLoading({
              title: '加载中...',
            })
            wx.request({
              url: global_variable.url + '/product/priceChange/' + productId,
              success: function (res) {
                var arr = res.data.data
                var newarr = arr.sort((a, b) => a.createTime.localeCompare(b.createTime));
                console.log(newarr)
                var price = []
                var created = []
                for (var i = 0; i < newarr.length; i++) {
                  price[i] = newarr[i].curPrice
                  created[i] = newarr[i].created
                }
                console.log(price, created)
                app.globalData.price = price
                app.globalData.created = created
                console.log(app.globalData.price, app.globalData.created)
                wx.hideLoading();
                wx.navigateTo({
                  url: '/pages/details/details?id=' + productId
                });
              },
              fail() {
                wx.showToast({
                  title: `请求超时\r\n请稍后下拉尝试`,
                  //小程序中文字换行需要\r\n
                  icon: 'none',
                  duration: 2000
                })
                console.log('请求超时')
                wx.hideLoading();
              }
            })
            wx.removeStorageSync('fromdetails')
            wx.removeStorageSync('productId')
          }
        }
      })

      // wx.request({
      //   url: global_variable.url + 'subscribe/all?sessionId=' + wx.getStorageSync("sessionId"),
      //   success: function (res) {
      //     wx.setStorageSync('all', res.data.data)
      //   }
      // })

    }else {
      wx.showToast({
        title: `没有授权\r\将失去一部分权限`,
        icon: 'none',
        duration: 2000
      })
    }
  },
  goEmail: function() {
    var that = this
    if (that.data.hasUserInfo){
      wx.navigateTo({
        url: '../email/email'
      })
    }else {
      wx.showToast({
        title: `请先授权`,
        icon: 'none',
        duration: 2000
      })
    }
  },
  goAll: function() {
    var that = this
    if (that.data.hasUserInfo) {
      var sessionId = wx.getStorageSync('sessionId')
      wx.navigateTo({
        url: '../all/all?sessionId=' + sessionId
      })
    } else {
      wx.showToast({
        title: `请先授权`,
        icon: 'none',
        duration: 2000
      })
    }
  },
  // getSession:function(){
  //   var that = this;
  //   wx.login({
  //     success:function(res){
  //       // console.log(res.code)
  //       if(res.code){
  //         wx.request({
  //           url: global_variable.url + '/user/login',
  //           data:{
  //             code:res.code
  //           },
  //           success:function(res){
  //             if(res.data.data){
  //               console.log(res.data.data)
  //                 wx.setStorageSync("sessionId", res.data.data)
  //             }
  //           }
  //         })
  //       }

  //     }
  //   })
  // },
  onPageScroll: function (e) {
    if (e.scrollTop < 0) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  },
  chat: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
