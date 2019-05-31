// page/component/list/list.js

const global_variable = require('../../utils/global_variable.js')
Page({
  data:{
    third:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var op = options
    var that = this
    console.log(op)
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: global_variable.url + 'product/thirdAssortment?secondAssortment='+op.second,
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          third: res.data.data
        })
        wx.hideLoading()
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})