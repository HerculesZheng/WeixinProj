// teacher.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teachers:[
      {
        image:'../../utils/image/avator.png',
        name:'张三',
        major:'生物'
      },
      {
        image: '../../utils/image/avator.png',
        name: '李四',
        major: '化学'
      },
      {
        image: '../../utils/image/avator.png',
        name: '王五',
        major: '数学'
      },
      {
        image: '../../utils/image/avator.png',
        name: '赵六',
        major: '生物'
      },
      {
        image: '../../utils/image/avator.png',
        name: '张三',
        major: '生物'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var teachers = [];
    // for(var i=0;i<5;++i){
    //   var teacher = new Object();
    //   teacher.name = 'name'+i;
    //   teacher.major = 'major'+i;
    //   teacher.image = '../../utils/image/avator.png';
    //   teachers.push(teacher);
    // }
    // this.setDate({
    //   teachers:teachers
    // })
    // this.setData({
    //   teachers:function(){
    //     for(var i = 0;i<5;++i){

    //     }
    //   }
    // })
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