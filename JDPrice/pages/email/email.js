const util = require('../../utils/util.js')
const app = getApp()
const global_variable = require('../../utils/global_variable.js')

Page({
  data: {
    emails: [],
    inputEmail: '',
    inputVerificationCode: '',
    emailBtn: '获取验证码',
    disabledPostCode: true,
    disabledBinding: true,
    loading: false,
    userInfo: {},
  },
  onLoad: function() {
    this.setData({
      userInfo: app.globalData.userInfo,
    })
  },
  bindKeyInputEmail: function(e) {
      this.setData({
        inputEmail: e.detail.value,
      })
      if(e.detail.value !== '') {
          this.setData({
            disabledPostCode: false
          })
      }else {
        this.setData({
          disabledPostCode: true
        })
      }
  },
  bindKeyInputCode: function(e){
      this.setData({
        inputVerificationCode: e.detail.value
      })
    // console.log(this.data.inputVerificationCode)
    if (this.data.inputEmail !== '' && e.detail.value !== ''){
      this.setData({
        disabledBinding: false
      })
      }else {
      this.setData({
        disabledBinding: true
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
          url: global_variable.url + '/user/sentVerifyEmail', // 接口地址
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
                console.log('接口错误')
            }
        })
        that.setData({
            disabled: true,
            emailBtn: '正在发送'
        })
        var countdown = 60
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
  },
  verificationBtn: function(){
    var that = this
    that.setData({
      loading: true
    })
    const email = that.data.inputEmail
    const verificationCode = that.data.inputVerificationCode
    // console.log(verificationCode)
    wx.request({
      url: global_variable.url + '/user/verify',
      method: 'post',
      data: {
        email: email,
        code: verificationCode,
        sessionId: wx.getStorageSync("sessionId")
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' 
      },
      success(res) {
        console.log(res)
        console.log(res.data)
        if(res.data.data){
          that.setData({
            loading: false
          })
          console.log("绑定成功")
          // 关闭当前页面，跳转到应用内的某个页面。
          wx.navigateBack({
            delta: 1
          })
          wx.showToast({
            title: `绑定成功`,
            icon: 'success',
            duration: 2000
          })
        }else {
          that.setData({
            loading: false
          })
          wx.showToast({
            title: `验证码错误`,
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail() {
        console.log('接口错误') //
      }
    })
  },
  onPageScroll: function (e) {
    if (e.scrollTop < 0) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  }
})