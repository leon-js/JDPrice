//kinds.js
const util = require('../../utils/util.js')

Page({
  data: {
    
  },
  onLoad: function () {
    
  },
  onPageScroll: function (e) {
    if (e.scrollTop < 0) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  }
})
