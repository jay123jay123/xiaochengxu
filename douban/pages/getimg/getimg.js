Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'photo',
    userPhotos: [

    ],
    height: '680rpx',
    width: '680rpx',
    mode: 'aspectFill'
  },
  onLoad: function (params) {
    console.log(params);
    var that = this;
    var tmp = ['https://wxappi.xueleyun.net/sales/wx/getimg/taobao/' + params.url + '/0.jpg', 'https://wxappi.xueleyun.net/sales/wx/getimg/taobao/' + params.url + '/1.jpg', 'https://wxappi.xueleyun.net/sales/wx/getimg/taobao/' + params.url + '/2.jpg', 'https://wxappi.xueleyun.net/sales/wx/getimg/taobao/' + params.url + '/3.jpg', 'https://wxappi.xueleyun.net/sales/wx/getimg/taobao/' + params.url + '/4.jpg']

    that.setData({
      userPhotos: tmp
    });

  } ,
  imgYu: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  }
 
})