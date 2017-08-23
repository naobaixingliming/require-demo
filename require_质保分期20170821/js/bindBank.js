/**
 * 加载模块
 */

// require写法
require(['jquery', 'common','mui'], function($, common,mui) {
	
	common.test();
				
	(function($, doc) {
		var cityData = [{
			text: '银行',
			children: [{
					text: "中国银行"
				}, {
					text: "农业银行"
				}, {
					text: "建设银行"
				}, {
					text: "招商银行"
				}, {
					text: "中信银行"
				}, {
					text: "民生银行"
				}, {
					text: "兴业银行"
				}, {
					text: "光大银行"
				}, {
					text: "银行09"
				}, {
					text: "银行10"
				}, {
					text: "银行11"
				}, {
					text: "银行12"
				}, {
					text: "银行13"
				}, {
					text: "银行14"
				}, {
					text: "银行15"
				}, {
					text: "银行16"
			}]
		}];	
		$.init();
		$.ready(function() {
			var cityPicker = new $.PopPicker({
				layer: 2
			});
			cityPicker.setData(cityData);
			var showTimePickerButton = doc.getElementById('showTimePicker');
			var timeResult = doc.getElementById('timeResult');
			showTimePickerButton.addEventListener('tap', function(event) {				
				cityPicker.show(function(items) {
					timeResult.innerText = items[1].text;
				});
			}, false);
		});
	})(mui, document);
	
		
	var bindBank={			
		init:function(){
			this.eventBind();
		},
		eventBind:function(){						
			if($('#timeResult').text()) {
				$('#showTimePicker i:first-child').hide();
			}
		}	
	}
	bindBank.init();
})