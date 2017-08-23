/**
 * require配置文件
 */

require.config({
	baseUrl: 'http://192.168.20.8:8020/weixin/require_stage/js/', // 加载js文件时以此路径作为参照 baseUrl + paths = 文件的完整路径
	waitSeconds: 10, // 设置超时
	urlArgs: 'v=' + Date.now(), // 不同的版本用不同的标识,达到清理缓存的目的
	// 配置短路径  baseUrl + 短路径 === 完整路径
	paths: {
		'jquery': 'libs/jquery-1.10.2.min',
		'jquery-ui': 'libs/jquery-ui.min',
		'jquery-mobile':'libs/jquery.mobile-1.4.5.min',
		'mui': 'plugins/mui.min',
		'fastclick': 'plugins/fastclick.min',
		'circleProgress': 'plugins/circle-progress.min',
		'cityData':'plugins/bank.data',
		"common": "common/common",
	},
	// 定义非amd模块和依赖
	shim: {
		// 加载非AMD规范js文件
		'jquery': {
			exports: '$'
		},
		'mui': {
			exports: 'mui'			
		},
		"common":{
			deps: ['jquery'],
			exports: 'common'			
		},
		// 声明依赖关系
		'jquery-ui': {
			deps: ['jquery']
		},
		"jquery-mobile":{
			exports:'jQuery.fn.jqueryMobile',
			deps: ['jquery']
		},
		'circleProgress': {
			exports:'jQuery.fn.circleProgress',
			deps: ['jquery']
		}				
	}
});
console.log("config finish!");