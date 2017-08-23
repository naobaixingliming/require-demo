/**
 * 加载模块
 * require
 */

// myStages.js 
require(['jquery', 'circleProgress'], function($, circleProgress) {
	console.log('myStages.js');

	var myStage = {
		init: function() {
			this.circleBar();
		},
		circleBar: function() {
			var $stageMoney = Number($('.stageMoney').text());
			var $allMOney = Number($('.allMOney').text());
			var value = $stageMoney / $allMOney;
			$('#circle').circleProgress({
				value: value,
				size: 160,
				thickness: 10,
				emptyFill: "#1fa6fe",
				fill: {
					gradient: ["#56f9cd", "#ecfeba", "#56f9cd"]
				}
			});
		}

	}
	myStage.init();

})