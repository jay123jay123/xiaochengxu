var API_URL = 'https://wxappi.xueleyun.net/sales/wx/';

Page({
  data: {
    title:"加载中...",
  	brand:[]
  },
  onLoad:function (){
  	var that = this;
  	wx.showToast({
  		title:"加载中...",
  		icon:"loading",
  		duration:10000
  	});

  	wx.request({
  		url:API_URL,
  		data:{},
  		header:{
  			'Content-Type': 'application/json'
  		},
  		success:function (res){
  			wx.hideToast();
  			var data = res.data;
  			console.log(data);
  			that.setData({
//  				title:data.title,
          title:'品牌店铺',
  				brand:data
  			});
  		}
  	});
  }
})