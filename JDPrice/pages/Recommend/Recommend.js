// page/component/list/list.js
const app = getApp()
const global_variable = require('../../utils/global_variable.js')
const util = require('../../utils/util.js')
Page({
  data: {
    third: [],
    limit: 10,
    kind: null,
    isLoading: false,
    floorstatus: false,
    windHeight: null
  },
  test(e) {
    console.log(e.currentTarget.dataset.item)
    var id = e.currentTarget.dataset.item
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: global_variable.url + '/product/priceChange/' + e.currentTarget.dataset.item,
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
          url: '/pages/details/details?id=' + id
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
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    console.log(options)
    var kind = options.kind
    var limit = that.data.limit
    that.setData({
      kind: kind
    })
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: global_variable.url + '/product/get10PriceChange?limit='+limit+'&assortment='+kind,
      success: function (res) {
        console.log(res.data.data)
        var third = res.data.data
        for (var i = 0; i < third.length; i++) {
          var end = third[i].imgUrl.replace(third[i].imgUrl.slice(util.findstr(third[i].imgUrl, '/', 3) + 1, util.findstr(third[i].imgUrl, '_', 0)), 's450x450')
          third[i].imgUrl = end
        }
        that.setData({
          third: third
        })
        wx.hideLoading();
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
    wx.getSystemInfo({
      success(res) {
        // console.log(res.model)
        // console.log(res.pixelRatio)
        // console.log(res.windowWidth)
        var windHeight = res.screenWidth
        that.setData({
          windHeight: windHeight
        })
        console.log(res.screenWidth)
        // console.log(res.language)
        // console.log(res.version)
        // console.log(res.platform)
      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    console.log(133)
    // 页面关闭

  },
  //下拉刷新
  onPullDownRefresh: function () {
    var that = this
    var kind = that.data.kind
    that.setData({
      limit: 10,
      isLoading: true
    })
    wx.showNavigationBarLoading() //在标题栏中显示加载
    wx.setBackgroundTextStyle({
      textStyle: 'dark'
    })
    wx.showLoading({
      title: '加载中...',
    })
    //模拟加载
    // setTimeout(function () {
    //   // complete
    //   wx.hideNavigationBarLoading() //完成停止加载
    //   wx.stopPullDownRefresh() //停止下拉刷新
    // }, 1500);
    wx.request({
      url: global_variable.url + '/product/get10PriceChange?limit=10&assortment=' + kind,
      success: function (res) {
        console.log(res.data.data)
        var third = res.data.data
        for (var i = 0; i < third.length; i++) {
          var end = third[i].imgUrl.replace(third[i].imgUrl.slice(util.findstr(third[i].imgUrl, '/', 3) + 1, util.findstr(third[i].imgUrl, '_', 0)), 's450x450')
          third[i].imgUrl = end
        }
        that.setData({
          third: third,
          isLoading: false
        })
        wx.hideLoading();
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      },
      fail() {
        wx.showToast({
          title: `请求超时\r\n请稍后下拉尝试`,
          //小程序中文字换行需要\r\n
          icon: 'none',
          duration: 2000
        })
        console.log('请求超时')
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
        wx.hideLoading();
        that.setData({
          isLoading: false
        })
      }
    })
  },
  getRecommendation: function (limit,kind) {
    var that = this
    if(!that.data.isLoading){
      that.setData({
        isLoading: true
      })
      wx.showLoading({
        title: '加载中...',
      })
      wx.request({
        url: global_variable.url + '/product/get10PriceChange?limit=' + limit + '&assortment=' + kind,
        success: function (res) {
          console.log(res.data.data)
          var third = res.data.data
          for (var i = 0; i < third.length; i++) {
            var end = third[i].imgUrl.replace(third[i].imgUrl.slice(util.findstr(third[i].imgUrl, '/', 3) + 1, util.findstr(third[i].imgUrl, '_', 0)), 's450x450')
            third[i].imgUrl = end
          }
          var newlimit = that.data.limit + 10
          var newthird = that.data.third.concat(third)
          that.setData({
            third: newthird,
            limit: newlimit
          })
          wx.hideLoading();
          that.setData({
            isLoading: false
          })
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
          that.setData({
            isLoading: false
          })
        }
      })
    }
  
  },
  onReachBottom() {
    var that = this
    var limit = that.data.limit + 10
    var kind = that.data.kind
    this.getRecommendation(limit,kind)
  },
  onUnload: function () {
    this.setData({
      isLoading: false
    })
  },
  onPageScroll: function (e) {
    var px = this.data.windHeight/750*400
    if (e.scrollTop > px) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  //回到顶部
  goTop: function (e) { 
    var that = this
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
      that.setData({
        floorstatus: false
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  onShow: function (){
    this.setData({
      isLoading: false
    })
  }
})