//app.js
const global_variable = require('./utils/global_variable.js')
function findstr(str, cha, num) {
  var x = str.indexOf(cha);
  for (var i = 0; i < num; i++) {
    x = str.indexOf(cha, x + 1);
  }
  return x;
}
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          wx.request({
            url: global_variable.url + '/user/login',
            data: {
              code: res.code
            },
            success: function (res) {
              if (res.data.data) {
                console.log(res)
                wx.setStorageSync("sessionId", res.data.data)
                  wx.request({
                  url: global_variable.url + 'subscribe/all?sessionId=' + wx.getStorageSync("sessionId"),
                  success: function (res) {
                    var third = res.data.data
                    var allProductId = []
                    for (var i = 0; i < third.length; i++) {
                      var end = third[i].imgUrl.replace(third[i].imgUrl.slice(findstr(third[i].imgUrl, '/', 3) + 1, findstr(third[i].imgUrl, '_', 0)), 's450x450')
                      third[i].imgUrl = end
                      allProductId.push(third[i].productId)
                    }
                    wx.setStorageSync('all', third)
                    wx.setStorageSync('allProductId', allProductId)
                  }
                })
              }
            }
          })
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    commodity_type: null,
    rankprice: [],
    rankcreated: [],
    newCollection: false,
    price: [],
    created: []
  }
})