Page({
  data: {
    text: 'init data',
    num: 0,
    array: [{text: 'init data'}],
    object: {
      text: 'init data'
    },
    //内容绑定
    message: 'Hello WeApp',

    //组件属性绑定
    id: 0,

    //控制属性绑定
    condition: true,

    //三元运算
    flag: false,

    //算数运算
    a: 1,
    b: 2,
    c: 3,

    //逻辑判断
    length: 6,

    //字符串运算
    name: '顺子',

    //数组组合
    zero: 0,

    //对象

    x: 0,
    y: 1,

    //对象展开
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      c: 3,
      d: 4
    },
    p: 5,

    //对象key和value形同时
    foo: 'my-foo',
    bar: 'my-bar'

  },
  changeText: function() {
    // this.data.text = 'changed data'  // bad, it can not work 
    if (this.data.text == 'init data')     
      this.setData({
        text: 'changed data',
      })
    else
      this.setData({
        text: 'init data'
      })      
  },
  changeNum: function() {
    this.data.num = this.data.num + 1;
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function() {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text':'changed data'
    })
  },
  changeItemInObject: function(){
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function() {
    this.setData({
      'newField.text': 'new data'
    })
  },
  addNews:function(){
    this.setData({
      newsone: 'hellow world!'
    })
  }
})