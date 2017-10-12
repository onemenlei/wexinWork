Page({
  data: {
    input_data: [
      { id: 1, unique: "unique1" },
      { id: 2, unique: "unique2" },
    ]
  },
  //前部插入元素函数
  addToFront: function (e) {
    const length = this.data.input_data.length + 1;
    this.data.input_data = [{ id: length, unique: 'unique_' + length }].concat(this.data.input_data)
    //this.data.input_data.push({ id: length, unique: 'unique_' + length })  在最后插入
    this.setData({
      input_data: this.data.input_data
    })
    console.log(this.data.input_data)
  },
  //随机排序函数
  switch: function (e) {
    const length = this.data.input_data.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      console.log("x=" + x, "y=" + y, "内容" + this.data.input_data[x].id, "two内容" + this.data.input_data[y].id)
      const temp = this.data.input_data[x]
      this.data.input_data[x] = this.data.input_data[y]
      this.data.input_data[y] = temp      
    }
    this.setData({
      input_data: this.data.input_data
    })
  }
})