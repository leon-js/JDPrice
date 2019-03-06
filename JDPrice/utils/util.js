const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 邮箱验证
function isEmail(mail) {          
  var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;    
  if(!reg.test(mail)){    
    wx.showToast({
      title: `输入邮箱有误\r\n请重新输入`,
      //小程序中文字换行需要\r\n
      icon: 'none',
      duration: 2000
    })
    return false
  }else {
    wx.showToast({
      title: `已发送验证码`,
      //小程序中文字换行需要\r\n
      icon: 'none',
      duration: 2000
    })
    return true
  }        
}    

module.exports = {
  formatTime: formatTime,
  isEmail: isEmail
}
