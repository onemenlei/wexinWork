// pages/v-for/v-for.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{ objectname: '武当派', value: [{name:'张三丰',max:9999,url:'../flex/flex'},{name:'宋远桥',max:1876,url:'../iffor/iffor'},{name:'张翠山',max:1028,url:'../index/index'}]},
    {objectname:'峨眉派',value:[{name:'灭绝师太',max:2598,url:'../login/login'},{name:'纪晓芙',max:999,url:'../logs/logs'},{name:'周芷若',max:5872,url:'../scrollView/scrollview'}]},
    { objectname: '少林派', value: [{ name: '老光头', max: 2598, url: '' }, { name: '中光头', max: 999, url: '' }, { name: '小光头', max: 5872, url: '' }] },
    ],
    isShow:-1,
    array: ['Android', 'IOS', 'ReactNativ', 'WeChat', 'Web'],
    twoList: [{
      id: 1,
      name: '应季鲜果',
      count: 1,
      twodata: [{
        'id': 11,
        'name': '鸡脆骨'
      }, {
        'id': 12,
        'name': '鸡爪'
      }]
    }, {
      id: 2,
      name: '精致糕点',
      count: 6,
      twodata: [{
        'id': 13,
        'name': '羔羊排骨一条'
      }, {
        'id': 14,
        'name': '微辣'
      }]
    }]
  },
vshow:function(e){
  console.log(e.currentTarget.id);
    this.setData({      
      isShow: (e.currentTarget.id-1)
    })
},
buts:function(e){
  console.log(this.data.flag);
  this.setData({
    flag:!(this.data.flag)
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