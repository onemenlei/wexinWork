// test.js
var app = getApp()
Page({
  /**
     * 页面的初始数据
     */
  data: {
    //是否显示指示点 true 显示 false 不显示
    indicatorDots: true,
    //控制方向
    vertical: false,
    //是否自动切换
    autoplay: true,
    //自动切换时间间隔
    interval: 3000,
    //滑动动画时长
    duration: 1000,
    name: 'hei',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ], 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    //网络请求 GET方法
    wx.request({
      url: '',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      /*成功后的回调
      success: function (res) {
        console.log('11111' + res),
          that.setData({
            images: res.data
          })
      }*/
    })
    
  },

  change: function () {
    this.setData({
      name: 'MINA'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
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