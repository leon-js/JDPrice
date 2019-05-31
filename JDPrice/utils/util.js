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

import * as echarts from '../ec-canvas/echarts';

const app = getApp();


function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: 'sss',
      left: 'center',
      show: false
    },
    color: ["#37A2DA"],
    // color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    // legend: {
    //   data: ['A', 'B', 'C'],
    //   top: 50,
    //   left: 'center',
    //   backgroundColor: 'white',
    //   z: 100
    // },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: app.globalData.created,
      // data: [1,2,3],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      name: '¥'
      // show: false
    },
    series: [{
      name: '价格',
      type: 'line',
      smooth: true,
      data: app.globalData.price,
      // data: [2,3,4],
      itemStyle: { normal: { label: { show: true } } }
    }
    // , {
    //   name: 'B',
    //   type: 'line',
    //   smooth: true,
    //   data: [12, 50, 51, 35, 70, 30, 20]
    // }, {
    //   name: 'C',
    //   type: 'line',
    //   smooth: true,
    //   data: [10, 30, 31, 50, 40, 20, 10]
    // }
    ]
  };

  chart.setOption(option);
  return chart;
}

// 找出指定第n个指定的字符
function findstr(str, cha, num) {
  var x = str.indexOf(cha);
  for (var i = 0; i < num; i++) {
    x = str.indexOf(cha, x + 1);
  }
  return x;
}

// 获取数组中最大最小值
var maxmin = function (arr) {
  var min = arr[0]
  var max = arr[0]
  for (var i = 0; i < arr.length; i++) {
    var cur = arr[i]
    cur > max ? max = cur : null
    cur < min ? min = cur : null
  }
  var obj = {}
  obj.max = max
  obj.min = min
  return obj
}

module.exports = {
  formatTime: formatTime,
  isEmail: isEmail,
  initChart: initChart,
  findstr: findstr,
  maxmin: maxmin
}
