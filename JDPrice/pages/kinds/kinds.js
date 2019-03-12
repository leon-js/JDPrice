//kinds.js
const util = require('../../utils/util.js')

Page({
  data: {
    
  },
  onLoad: function () {
    
  },
  onPageScroll: function (e) {
    // 控制不可向下滑
    if (e.scrollTop < 0) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  }
})
