const app = getApp()
Page({
  onLoad: function () {    
    this.setData({
      hasLogin: app.globalData.hasLogin
    })
  },
  data: {
    oiu:'13601918765',
  },
  login: function () {
    var that = this  
    wx.login({
      success: function (res) {
        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
        _getUserInfo()
        that.update()
      }
    })
    function _getUserInfo() {
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            hasLogin: true,
            userInfo: res.userInfo
          })
          wx.setStorageSync('key-hasLogin', app.globalData.hasLogin)
          wx.setStorageSync('key-userInfo', res.userInfo)
          wx.setStorageSync('oiu', that.data.oiu)         
        }
      })        
    }
  },
  clear: function () {
    this.setData({
      hasLogin: false,
      userInfo: {}
    })
    wx.setStorageSync('key-hasLogin', this.hasLogin)
    wx.setStorageSync('key-userInfo', this.userInfo)
  }
})
