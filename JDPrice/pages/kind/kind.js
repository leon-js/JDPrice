const global_variable = require('../../utils/global_variable.js')

Page({
  data: {
    category: [
      { name: '阅览', id: 'yuelan' },
      { name: '手机', id: 'shouji' },
      { name: '家电', id: 'jiadian' },
      { name: '数码', id: 'shuma' },
      { name: '家居', id: 'jiaju' },
      { name: '电脑', id: 'diannao' },
      { name: '厨具', id: 'chuju' },
      { name: '妆护', id: 'zhuanghu' },
      { name: '服饰', id: 'fushi' },
      { name: '钟表', id: 'zhongbiao' },
      { name: '鞋靴', id: 'xiexue' },
      { name: '母婴', id: 'muying' },
      { name: '礼品', id: 'lipin' },
      { name: '食品', id: 'shipin' },
      { name: '珠宝', id: 'zhubao' },
      { name: '汽用', id: 'qiche' },
      { name: '玩乐', id: 'wanle' },
      { name: '生鲜', id: 'shengxian' },
      { name: '整车', id: 'zhengche' },
    ],
    detail: [
      {
        id:'yuelan',banner:'/image/001.jpg',cate:'阅览',
        detail:[
          {thumb:'',name:'英文原版'},
          {thumb: '',name: '人文社科'},
          {thumb: '',name: '生活'},
          {thumb: '',name: '科技'},
          {thumb: '',name: '港台图书'},
          {thumb: '',name: '其他'},
        ]
      },
      {
        id: 'shouji',banner: '/image/001.jpg',cate: '手机',
        detail: [
          {thumb: '',name: '手机通讯'},
          {thumb: '',name: '运营商'},
          {thumb: '',name: '手机配件'}
        ]
      },
      {
        id: 'jiadian',banner: '/image/001.jpg',cate: '家电',
        detail: [
          {thumb: '',name: '大 家 电'},
          {thumb: '',name: '厨卫大电'},
          {thumb: '',name: '厨房小电'},
          {thumb: '',name: '生活电器'},
          {thumb: '',name: '个护健康'},
          {thumb: '',name: '五金家装'} 
        ]
      },
      {
        id: 'shuma', banner: '/image/001.jpg', cate: '数码',
        detail: [
          { thumb: '', name: '摄影摄像' },
          { thumb: '', name: '数码配件' },
          { thumb: '', name: '智能设备' },
          { thumb: '', name: '影音娱乐' },
          { thumb: '', name: '电子教育' },
          { thumb: '', name: '虚拟商品' }
        ]
      },
      {
        id: 'jiaju', banner: '/image/001.jpg', cate: '家居',
        detail: [
          { thumb: '', name: '家纺' },
          { thumb: '', name: '灯具' },
          { thumb: '', name: '生活日用' },
          { thumb: '', name: '家庭软饰' },
          { thumb: '', name: '宠物生活' },
        ]
      },
      {
        id: 'diannao', banner: '/image/001.jpg', cate: '电脑',
        detail: [
          { thumb: '', name: '电脑整机' },
          { thumb: '', name: '电脑配件' },
          { thumb: '', name: '外设产品' },
          { thumb: '', name: '游戏设备' },
          { thumb: '', name: '网络产品' },
          { thumb: '', name: '办公设备' },
          { thumb: '', name: '文具/耗材' },
          { thumb: '', name: '服务产品' },
        ]
      },
      {
        id: 'chuju', banner: '/image/001.jpg', cate: '厨具',
        detail: [
          { thumb: '', name: '烹饪锅具' },
          { thumb: '', name: '刀剪菜板' },
          { thumb: '', name: '厨房配件' },
          { thumb: '', name: '水具酒具' },
          { thumb: '', name: '餐具' },
          { thumb: '', name: '酒店用品' },
          { thumb: '', name: '茶具/咖啡具' },
        ]
      },
      {
        id: 'zhuanghu', banner: '/image/001.jpg', cate: '妆护',
        detail: [
          { thumb: '', name: '清洁用品' },
          { thumb: '', name: '面部护肤' },
          { thumb: '', name: '身体护理' },
          { thumb: '', name: '口腔护理' },
          { thumb: '', name: '女性护理' },
          { thumb: '', name: '洗发护发' },
          { thumb: '', name: '香水彩妆' },
        ]
      },
      {
        id: 'fushi', banner: '/image/001.jpg', cate: '服饰',
        detail: [
          { thumb: '', name: '女装' },
          { thumb: '', name: '男装' },
          { thumb: '', name: '内衣' },
          { thumb: '', name: '洗衣服务' },
          { thumb: '', name: '服饰配件' },
        ]
      },
      {
        id: 'zhongbiao', banner: '/image/001.jpg', cate: '钟表',
        detail: [
          { thumb: '', name: '钟表' },
        ]
      },
      {
        id: 'xiexue', banner: '/image/001.jpg', cate: '鞋靴',
        detail: [
          { thumb: '', name: '流行男鞋' },
          { thumb: '', name: '时尚女鞋' },
        ]
      },
      {
        id: 'muying', banner: '/image/001.jpg', cate: '母婴',
        detail: [
          { thumb: '', name: '奶粉' },
          { thumb: '', name: '营养辅食' },
          { thumb: '', name: '尿裤湿巾' },
          { thumb: '', name: '喂养用品' },
          { thumb: '', name: '洗护用品' },
          { thumb: '', name: '童车童床' },
          { thumb: '', name: '寝居服饰' },
          { thumb: '', name: '妈妈专区' },
          { thumb: '', name: '童装童鞋' },
          { thumb: '', name: '安全座椅' },
        ]
      },
      {
        id: 'lipin', banner: '/image/001.jpg', cate: '礼品',
        detail: [
          { thumb: '', name: '潮流女包' },
          { thumb: '', name: '精品男包' },
          { thumb: '', name: '功能箱包' },
          { thumb: '', name: '礼品' },
          { thumb: '', name: '奢侈品' },
          { thumb: '', name: '婚庆' },
        ]
      },
      {
        id: 'shipin', banner: '/image/001.jpg', cate: '食品',
        detail: [
          { thumb: '', name: '进口食品' },
          { thumb: '', name: '地方特产' },
          { thumb: '', name: '休闲食品' },
          { thumb: '', name: '粮油调味' },
          { thumb: '', name: '饮料冲调' },
          { thumb: '', name: '食品礼券' },
          { thumb: '', name: '茗茶' },
        ]
      },
      {
        id: 'zhubao', banner: '/image/001.jpg', cate: '珠宝',
        detail: [
          { thumb: '', name: '时尚饰品' },
          { thumb: '', name: '黄金' },
          { thumb: '', name: 'K金饰品' },
          { thumb: '', name: '金银投资' },
          { thumb: '', name: '银饰' },
          { thumb: '', name: '钻石' },
          { thumb: '', name: '翡翠玉石' },
          { thumb: '', name: '水晶玛瑙' },
          { thumb: '', name: '彩宝' },
          { thumb: '', name: '铂金' },
          { thumb: '', name: '木手串/把件' },
          { thumb: '', name: '珍珠' },
        ]
      },
      {
        id: 'qiche', banner: '/image/001.jpg', cate: '汽用',
        detail: [
          { thumb: '', name: '维修保养' },
          { thumb: '', name: '车载电器' },
          { thumb: '', name: '美容清洗' },
          { thumb: '', name: '汽车装饰' },
          { thumb: '', name: '安全自驾' },
          { thumb: '', name: '汽车服务' },
          { thumb: '', name: '赛事改装' },
        ]
      },
      {
        id: 'wanle', banner: '/image/001.jpg', cate: '玩乐',
        detail: [
          { thumb: '', name: '适用年龄' },
          { thumb: '', name: '遥控/电动' },
          { thumb: '', name: '毛绒布艺' },
          { thumb: '', name: '娃娃玩具' },
          { thumb: '', name: '模型玩具' },
          { thumb: '', name: '健身玩具' },
          { thumb: '', name: '动漫玩具' },
          { thumb: '', name: '益智玩具' },
          { thumb: '', name: '积木拼插' },
          { thumb: '', name: 'DIY玩具' },
          { thumb: '', name: '创意减压' },
          { thumb: '', name: '乐器' },
        ]
      },
      {
        id: 'shengxian', banner: '/image/001.jpg', cate: '生鲜',
        detail: [
          { thumb: '', name: '产地直供' },
          { thumb: '', name: '水果' },
          { thumb: '', name: '猪牛羊肉' },
          { thumb: '', name: '禽肉蛋品' },
          { thumb: '', name: '冷冻食品' },
          { thumb: '', name: '熟食腊味' },
          { thumb: '', name: '饮品甜品' },
          { thumb: '', name: '蔬菜' },
        ]
      },
      {
        id: 'zhengche', banner: '/image/001.jpg', cate: '整车',
        detail: [
          { thumb: '', name: '全新整车' },
          { thumb: '', name: '二手车' },
        ]
      },
    ],
    curIndex: 0,
    isScroll: false,
    toView: 'guowei'
  },
  onReady() {

  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)

  },
  onPageScroll: function (e) {
    if (e.scrollTop < 0) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  }

})