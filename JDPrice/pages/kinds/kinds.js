//kinds.js
const util = require('../../utils/util.js')
const global_variable = require('../../utils/global_variable.js')
const app = getApp()

Page({
  data: {
    commodity_type: [],
    pageLoading: true
  },
  onLoad: function () {
    if (app.globalData.commodity_type) {
      this.setData({
        commodity_type: app.globalData.commodity_type,
      })
    }else {
      var that = this
      wx.request({
        url: global_variable.url + '/product/rootAssortment/all', // 接口地址
        method: 'get',
        data: {
          
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 对数据进行 JSON 序列化
        },
        success(res) {
          console.log(res.data.data) // 打印返回值,本项目目前用不到
          app.globalData.commodity_type = res.data
          that.setData({
            commodity_type: res.data.data,
          })
        },
        fail() {
          console.log('接口错误')
        }
      })
    }
  },
  onPageScroll: function (e) {
    // 控制不可向下滑
    if (e.scrollTop < 0) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  },
  // secondary_type: function (e) {
  //   if (this.data.pageLoading){
  //     console.log(e._relatedInfo.anchorTargetText)
  //     this.setData({
  //       pageLoading: false
  //     })
  //     wx.navigateTo({
  //       url: '../secondKinds/secondKinds?name=' + e._relatedInfo.anchorTargetText,
  //     })
  //     this.setData({
  //       pageLoading: true
  //     })
  //   }
  // }
})
