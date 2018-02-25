var API_URL = 'https://wxappi.xueleyun.net/sales/wx/plat.php';

Page({
  data: {
    title: "加载中。。",
    plat: []
  },
  onLoad: function () {
    var that = this;
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 10000
    });

    wx.request({
      url: API_URL,
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.hideToast();
        var data = res.data;
        console.log(data);
        that.setData({
          title: '平台分类',
          plat: data
        });
      }
    });
  }
})