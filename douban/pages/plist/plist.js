var API_URL = 'https://wxappi.xueleyun.net/sales/wx/platformlist.php';

Page({
  data: {
    list: {}
  },
  onLoad: function (params) {
    console.log(params);
    var that = this;
    wx.request({
      url: API_URL,
      data: {
        tb: params.tb,
        brand: params.brand

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          list: res.data
        });
      }
    })
  }
});