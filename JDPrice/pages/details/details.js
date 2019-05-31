// page/component/details/details.js

// Page({
//   data: {
//     goods: {
//       id: 1,
//       image: '/image/goods1.png',
//       title: '新鲜梨花带雨',
//       price: 0.01,
//       stock: '有货',
//       detail: '这里是梨花带雨详情。',
//       parameter: '125g/个',
//       service: '不支持退货'
//     },
//     num: 1,
//     totalNum: 0,
//     hasCarts: false,
//     curIndex: 0,
//     show: false,
//     scaleCart: false
//   },

//   addCount() {
//     let num = this.data.num;
//     num++;
//     this.setData({
//       num: num
//     })
//   },

//   addToCart() {
//     const self = this;
//     const num = this.data.num;
//     let total = this.data.totalNum;

//     self.setData({
//       show: true
//     })
//     setTimeout(function () {
//       self.setData({
//         show: false,
//         scaleCart: true
//       })
//       setTimeout(function () {
//         self.setData({
//           scaleCart: false,
//           hasCarts: true,
//           totalNum: num + total
//         })
//       }, 200)
//     }, 300)

//   },

//   bindTap(e) {
//     const index = parseInt(e.currentTarget.dataset.index);
//     this.setData({
//       curIndex: index
//     })
//   }

// })

// import * as echarts from '../../ec-canvas/echarts';

// const app = getApp();

// function initChart(canvas, width, height) {
//   const chart = echarts.init(canvas, null, {
//     width: width,
//     height: height
//   });
//   canvas.setChart(chart);

//   var option = {
//     title: {
//       text: '测试下面legend的红色区域不应被裁剪',
//       left: 'center'
//     },
//     color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
//     legend: {
//       data: ['A', 'B', 'C'],
//       top: 50,
//       left: 'center',
//       backgroundColor: 'white',
//       z: 100
//     },
//     grid: {
//       containLabel: true
//     },
//     tooltip: {
//       show: true,
//       trigger: 'axis'
//     },
//     xAxis: {
//       type: 'category',
//       boundaryGap: false,
//       data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
//       // show: false
//     },
//     yAxis: {
//       x: 'center',
//       type: 'value',
//       splitLine: {
//         lineStyle: {
//           type: 'dashed'
//         }
//       }
//       // show: false
//     },
//     series: [{
//       name: 'A',
//       type: 'line',
//       smooth: true,
//       data: [18, 36, 65, 30, 78, 40, 33]
//     }, {
//       name: 'B',
//       type: 'line',
//       smooth: true,
//       data: [12, 50, 51, 35, 70, 30, 20]
//     }, {
//       name: 'C',
//       type: 'line',
//       smooth: true,
//       data: [10, 30, 31, 50, 40, 20, 10]
//     }]
//   };

//   chart.setOption(option);
//   return chart;
// }
const util = require('../../utils/util.js')
const app = getApp()
const global_variable = require('../../utils/global_variable.js')
import * as echarts from '../../ec-canvas/echarts';
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: "options.name",
      left: 'center',
      show: true
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
      data: created,
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
      data: price
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
Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: util.initChart,
    },
    goods: {
      id: 1,
      image: '/image/goods1.png',
      title: '新鲜梨花带雨',
      price: 0.01,
      stock: '有货',
      detail: '这里是梨花带雨详情。',
      parameter: '125g/个',
      service: '不支持退货',
    },
    sku: null,
    price: null,
    created: null,
    alldet: null,
    title: null,
    pricearr: null,
    maxmin: {},
    iscollection: false,
    productId: null,
    array: ['最低价格提醒', '降价提醒', '波动提醒'],
    objectArray: [
      {
        id: 0,
        name: '最低价格提醒'
      },
      {
        id: 1,
        name: '降价提醒'
      },
      {
        id: 2,
        name: '波动提醒'
      }
    ],
    index: 0,
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },
    addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num: num
    })
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout(function () {
      self.setData({
        show: false,
        scaleCart: true
      })
      setTimeout(function () {
        self.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      }, 200)
    }, 300)

  },
  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  },
  onLoad: function (options) {
    console.log(options.id)
    var id = options.id
    var that = this
    var allProductId = wx.getStorageSync('allProductId')
    var b = allProductId.filter(item => {
      return item == id
    })
    if(b.length != 0){
      that.setData({
        iscollection : true
      })
    }
    wx.request({
      url: global_variable.url + '/product/'+id,
      success: function (res) {
        console.log(res.data.data)
        console.log(res.data.data.sku)
        var name = res.data.data.name
        var title = name.slice(0, name.lastIndexOf('【'))
        var price = app.globalData.price
        var created = app.globalData.created
        var maxmin = util.maxmin(price)
        var pricearr = []
        for (var i = 0; i < created.length; i++) {
          console.log(i);
          var pricejson = {}
          for (var j = 0; j < price.length; j++) {
            if (i == j) {
              pricejson.created = created[i];
              pricejson.price = price[j];
              pricearr.push(pricejson);
            }
          }
        }
        var imgUrl = res.data.data.imgUrl
        var newimg = imgUrl.replace(imgUrl.slice(util.findstr(imgUrl, '/', 3) + 1, util.findstr(imgUrl, '_', 0)), 's450x450')
        var alldet = res.data.data
        alldet.imgUrl = newimg
        that.setData({
          alldet: alldet,
          sku: JSON.parse(res.data.data.sku),
          price: app.globalData.price,
          created: app.globalData.created,
          title: title,
          pricearr: pricearr,
          maxmin: maxmin
          // title: JSON.parse(res.data.data.sku).商品名称
        })
        console.log(pricearr,111)
        console.log(that.data.pricearr,222)
        console.log(that.data.price,that.data.created)
        console.log(that.data.maxmin)
      },
      fail() {
        wx.showToast({
          title: `请求超时\r\n请稍后重试`,
          //小程序中文字换行需要\r\n
          icon: 'none',
          duration: 2000
        })
        console.log('请求超时')
      }
    })

    
    

    // this.setData({
    //   ec: {
    //     onInit: initChart
    //   }
    // })
  },
  onReady() {
    // this.setData({
    //   ec: {
    //     onInit: initChart
    //   }
    // })
  },
  onPageScroll: function (e) {
    if (e.scrollTop < 0) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  },
  collection: function () {
    var that = this
    var productId = that.data.alldet.productId
    if (app.globalData.userInfo) {
      var that = this
      var sessionid = wx.getStorageSync("sessionId")
      var commodityid = that.data.alldet.productId
      var level = that.data.index + 1
      console.log(sessionid, commodityid)
      wx.showLoading({
        title: '',
      })
      wx.request({
        url: global_variable.url + 'subscribe/add?sessionId=' + sessionid + '&productId=' + commodityid + '&level=' + level,
        success: function (res) {
          console.log(res)
          that.setData({
            iscollection: true
          })
          app.globalData.newCollection = true
          wx.hideLoading();
        },
        fail() {
          wx.showToast({
            title: `请求超时\r\n请稍后重试`,
            //小程序中文字换行需要\r\n
            icon: 'none',
            duration: 2000
          })
          console.log('请求超时')
          wx.hideLoading();
        }
      })
    }else {
      wx.showModal({
        title: '温馨提示',
        content: '请先授权后再进行收藏',
        cancelText: '取消',
        confirmText: '前往授权',
        success(res) {
          if (res.confirm) {
            wx.setStorageSync('productId', productId)
            wx.setStorageSync('fromdetails', true)
            wx.switchTab({
              url: '../index/index'
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    
  },
  discollection: function () {
    var that = this
    var productId = that.data.alldet.productId
    var sessionid = wx.getStorageSync("sessionId")
    console.log(productId)
    wx.showLoading({
      title: '',
    })
    var all = wx.getStorageSync('all')
    console.log(all)
    for (var i = 0; i < all.length; i++) {
      if (all[i].productId == productId) {
        all.splice(i, 1)
        break
      }
    }
    wx.request({
      url: global_variable.url + 'subscribe/delete?sessionId=' + sessionid + '&productId=' + productId,
      success: function (res) {
        wx.setStorageSync('all', all)
        console.log(wx.getStorageSync('all'))
        

        console.log(res)
        wx.hideLoading();
        wx.showToast({
          title: `取消成功`,
          //小程序中文字换行需要\r\n
          icon: 'success',
          duration: 2000
        })
        that.setData({
          iscollection: false
        })
        app.globalData.newCollection = true
      },
      fail() {
        wx.showToast({
          title: `请求超时\r\n请稍后重试`,
          //小程序中文字换行需要\r\n
          icon: 'none',
          duration: 2000
        })
        console.log('请求超时')
        wx.hideLoading();
      }
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChangetwo: function (e) {
    var that = this
    var sessionid = wx.getStorageSync('sessionId')
    var le = e.detail.value
    var level = e.detail.value + 1
    var commodityid = that.data.alldet.productId
    wx.showLoading({
      title: '更改中',
    })
    console.log('这是已经收藏的改变')
    console.log('picker发送选择改变，携带值为', e.detail.value)
    wx.request({
      url: global_variable.url + 'subscribe/update?sessionId=' + sessionid + '&productId=' + commodityid + '&level=' + level,
      success: function (res) {
        var shoucang = that.data.array[le]
        console.log(res)
        wx.hideLoading();
        wx.showToast({
          title: `服务已经更改为\r\n${shoucang}`,
          //小程序中文字换行需要\r\n
          icon: 'none',
          duration: 2000
        })
      },
      fail() {
        wx.showToast({
          title: `请求超时\r\n请稍后重试`,
          //小程序中文字换行需要\r\n
          icon: 'none',
          duration: 2000
        })
        console.log('请求超时')
        wx.hideLoading();
      }
    })
  }
});
