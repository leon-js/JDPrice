const util = require('../../utils/util.js')


Page({
  data: {
    emails: [],
    inputEmail: '',
    inputVerificationCode: '',
    emailBtn: '获取验证码',
    disabled: true
  },
  bindKeyInputEmail: function(e) {
      this.setData({
        inputEmail: e.detail.value,
      })
      if(e.detail.value !== '') {
          this.setData({
              disabled: false
          })
      }else {
        this.setData({
            disabled: true
        })
      }
  },
  sendEmail: function(e) {
    console.log(e)
    var that = this
    console.log(that.data.inputEmail)
    if(util.isEmail(that.data.inputEmail) == true) {
        const email = that.data.inputEmail
        wx.request({
          url: 'http://127.0.0.1:8080/user/sentVerifyEmail', // 接口地址
            method: 'post',
            data: {
              email:email, // 发送的email,
              sessionId:wx.getStorageSync("sessionId")
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 对数据进行 JSON 序列化
            },
            success(res) {
                console.log(res.data) // 打印返回值,本项目目前用不到
            },
            fail() {
                console.log('接口错误，测试用')
            }
        })
        that.setData({
            disabled: true,
            emailBtn: '正在发送'
        })
        var countdown = 5
        var interval = setInterval(function() {
            that.setData({
                disabled: true,
                emailBtn: countdown
            })
            countdown--
            if(countdown <= -1) {
                clearInterval(interval)
                that.setData({
                    disabled: false,
                    emailBtn: '获取验证码'
                })
            }
        },1000)
    }else {
        console.log(2)
    }
  }
})