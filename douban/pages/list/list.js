var API_URL = 'https://wxappi.xueleyun.net/sales/wx/list.php';

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
        tb: params.tb ,
        brand: params.brand

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        //wx.setStorageSync('tmp', res.data)
        var tmp = [] 
        for (var k in res.data){
          tmp[k] = { 'url': res.data[k]['url'].slice(-12), 'name': res.data[k]['name'], 'msales': res.data[k]['msales'], 'mprice': res.data[k]['mprice'], 'promotion_price': res.data[k]['promotion_price'], 'discount': res.data[k]['discount'], 'brand': res.data[k]['brand'], 'tb': res.data[k]['tb']}
        }
        //console.log(tmp)
        that.setData({
          list: tmp
        });
      }
    })
  }
});