// iffor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  moto:'Hello world!',
  arr1:[{name:'张三',age:14},{name:'李四',age:20},{name:'王五',age:15}],
  removeData:'',
  },
  motoTurn: function(){
  this.setData({
    moto:"1"
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this

    //获取远程数据
    wx.request({
      url: 'https://raw.githubusercontent.com/jiangzy27/how_to_react/master/score.json',
      header: {
        "Content-Type": "application/json"
      },
      data: {},
      success: function (res) {
        that.setData({ removeData: res.data.data });
      },
    })

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
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