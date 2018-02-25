var API_URL = 'https://wxappi.xueleyun.net/sales/wx/detail.php?tb=';

Page({
  data: {
    classify: {}
  },
  onLoad: function (params) {
   console.log(params);
    var that = this;
    wx.request({
      url: API_URL + params.tb,
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          classify: res.data
        });
      }
    })
  }
});