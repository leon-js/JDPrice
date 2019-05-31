// page/component/list/list.js
const app = getApp()
const global_variable = require('../../utils/global_variable.js')
const util = require('../../utils/util.js')
Page({
  data: {
    third: []
  },
  test(e){
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
          url: '/pages/details/details?id='+id
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
    var that = this
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: global_variable.url + '/product/hourlyPriceRank',
      success: function (res) {
        console.log(res.data.data)
        var third = res.data.data
        for(var i=0;i<third.length;i++) {
          var end = third[i].imgUrl.replace(third[i].imgUrl.slice(util.findstr(third[i].imgUrl, '/', 3) + 1, util.findstr(third[i].imgUrl, '_', 0)), 's450x450')
          var name = third[i].name.slice(0, third[i].name.lastIndexOf('【'))
          third[i].imgUrl = end
          third[i].name = name
          third[i].curPrice = Math.round(third[i].curPrice)
          third[i].prePrice = Math.round(third[i].prePrice)
        }
        that.setData({
          third: res.data.data
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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    wx.setBackgroundTextStyle({
      textStyle:'dark'
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
    var that = this
    wx.request({
      url: global_variable.url + '/product/hourlyPriceRank',
      success: function (res) {
        console.log(res.data.data)
        var third = res.data.data
        for (var i = 0; i < third.length; i++) {
          var end = third[i].imgUrl.replace(third[i].imgUrl.slice(util.findstr(third[i].imgUrl, '/', 3) + 1, util.findstr(third[i].imgUrl, '_', 0)), 's450x450')
          var name = third[i].name.slice(0, third[i].name.lastIndexOf('【'))
          third[i].imgUrl = end
          third[i].name = name
          third[i].curPrice = Math.round(third[i].curPrice)
          third[i].prePrice = Math.round(third[i].prePrice)
        }
        that.setData({
          third: third
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
      }
    })
  },
})


// 图片变高清步骤
// third[i].imgUrl = util.findstr
// var a = third[i].imgUrl
// var b = util.findstr(a,'/',3)
// var c = util.findstr(a, '_', 0)
// var d = a.slice(b + 1, c)
// var end = a.replace(d, 's450x450')