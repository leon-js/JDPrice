//logs.js
const util = require('../../utils/util.js')
const global_variable = require('../../utils/global_variable.js')

Page({
  data: {
    secondary_type: [],
    name: ''
  },
  onLoad: function (options) {
    this.setData({
      name: options.name
    })
    wx.setNavigationBarTitle({
      title: this.data.name
    })
    var that = this
    wx.request({
      url: global_variable.url + '/product/secondAssortment?rootAssortment=' + that.data.name, // 接口地址
      method: 'get',
      data: {

      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 对数据进行 JSON 序列化
      },
      success(res) {
        console.log(res.data.data) // 打印返回值,本项目目前用不到
        that.setData({
          secondary_type: res.data.data,
        })
        console.log(that.data.secondary_type)
      },
      fail() {
        console.log('接口错误')
      }
    })
  }
})
