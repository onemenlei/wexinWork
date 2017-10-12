// pages/component/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectId:'',
    carts:[]
  },
/*查找详细内容*/
sortDetails(e){  
  let carts = this.data.carts;  
  //console.log(carts.length);
  for (let i = 0; i < carts.length; i++){
    if (e == carts[i].id) {
      this.setData({
        obname: carts[i].name,
        obtitle:carts[i].title,
        obcolor:carts[i].color,
        obprice:carts[i].price,
        obimage:carts[i].image
      })
    }
  };
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var objectId = options.id;
    console.log(objectId);
    var that = this;
    wx.request({
      url: 'http://192.168.1.88:8080/goods.json', //根据服务器不同调整
      method: 'get',
      data: {},
      success: function (res) {
        that.setData({
          carts: res.data,        
        });
      }
    });
    setTimeout(()=> { 
      this.sortDetails(objectId);
      },300);    
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