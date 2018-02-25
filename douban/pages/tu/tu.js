var wxCharts = require('../../utils/wxcharts.js');
var API_URL = 'https://wxappi.xueleyun.net/sales/api2.php';  
var app = getApp();
var lineChart = null;

Page({
  data: {
    line: {},
    params:{}
  },
  touchHandler: function (e) {
    console.log(lineChart.getCurrentDataIndex(e));
  },

  onLoad: function (params) {
    console.log(params);
    var that = this ;
    var windowWidth = 320;
    var xydata = {} ;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    wx.request({
      url: API_URL,
      data: {
        'tb': params.tb,
        'url': 'https://detail.tmall.com/item.htm?id=' + params.url,
        'brand': params.brand
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {


        console.log(res.data);
        console.log(wx.getStorageSync('tmp'))
        xydata = res.data ; 
        var x = [];
        var y = [];
        var z = [];
        var dz = [];
        for (var key in xydata){
          x.push(xydata[key]['gettime']);
          y.push(xydata[key]['msales']);
          z.push(xydata[key]['mprice']);
          dz.push(xydata[key]['promotion_price']);
        }

        lineChart = new wxCharts({
          canvasId: 'lineCanvas',
          type: 'line',
          categories: x,
          //animation: true,
         // background: '#f5f5f5',
          series: [{
            name: '月销量',
            data: y,
            format: function (val) {
              return val;
            }
          }],
          xAxis: {
            disableGrid: true
          },
          yAxis: {
            title: '月销售(件)',
            format: function (val) {
              return val;
            },
            min: 0
          },
          width: windowWidth,
          height: 200,
          dataLabel: false,
          //dataPointShape: true
        });

        lineChart = new wxCharts({
          canvasId: 'lineCanvas2',
          type: 'line',
          categories: x,
          //animation: false,
          //background: '#f5f5f5',
          series: [{
            name: '价格',
            data: z
          },{
            name: '促销价',
            data: dz
          }],
          xAxis: {
            disableGrid: true
          },
          yAxis: {
            title: '价格(元)',
            format: function (val) {
              return val;
            },
            min: 0
          },
          width: windowWidth,
          height: 200,
          dataLabel: false,
          //dataPointShape: false
        });
        that.setData({
          params: params
        });

      }



    });

    

  }
});