// pages/component/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tab切换   
    navbar: ['全部', '待付款', '待收货','待评价','已完成'],
    currentTab: 0,
    result:[],
    totalPrice: 0, //总价，初始为0
    goods:[
      {
        id:'00000001',
        name:'迪斯尼童装短袖T恤',
        title:'迪士尼童装短袖T恤 男童宝宝夏装 2016新款百搭短袖 女童卡通动漫',
        color:'白',
        price:48.00,
        num:1,
        image:'../../../image/comm150X150.jpg',
        "selected": "true"
      },
      {
        id: '00000002',
        name: '变形金刚',
        title: '最新型号变形金刚 孩之宝你的伙伴 送给你的亲爱孩子',
        color: '白',
        price: 318.00,
        num: 1,
        image:'../../../image/11hd_01.jpg',
        "selected": "true"
      }
    ]
  },
  swichNav: function (e) {
    console.log(e.type);
    var that = this;
    if (this.data.currentTab === e.currentTarget.dataset.idx) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.idx,
      })
    };
  },
  swiperChange: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current,
    });    
  },
  getTotalPrice(e) {
 //   this.toConsole(e);
    let goods = this.data.goods;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < goods.length; i++) {         // 循环列表得到每个数据
      if (true) {                   // 判断选中才会计算价格
        total += goods[i].num * goods[i].price;     // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      goods: goods,
      totalPrice: total.toFixed(2)
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {  
    var that = this;   
    wx.request({
      url: 'http://192.168.1.88:8080/goods.json', //根据服务器不同调整
      method:'get',
      data:{},
      success:function(res){        
        console.log(res.data);
        console.log(that.data.goods.length);
        that.setData({ 
          result: res.data 
        });
        console.log(this.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})