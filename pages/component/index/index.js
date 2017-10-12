// pages/component/index/index.js
Page({
  data: {
    munu:[
      { url: '../../index/index', imageSrc:'../../../image/yd_banner01.jpg', name:'图片1'},
      { url: '../../login/login', imageSrc: '../../../image/yd_banner02.jpg', name: '图片2' }
    ],
    userInfo: {}
  },
  urlto:function(e){
    var menuItem = this.data.munu[parseInt(e.currentTarget.id)] 
    console.log(menuItem)
    if(menuItem.url){      
      wx.navigateTo({
        url: menuItem.url,
      })
    }
  },
  onShow: function (options) {
    this.setData({
      hasLogin : wx.getStorageSync('key-hasLogin'),
      userInfo: wx.getStorageSync('key-userInfo'),
      oiu: wx.getStorageSync('oiu')
    })
  },
})