	
(function() {
//	$("body").css("visibility", "hidden");
	change();

	function change() {
		//6.14娑擄拷1920px鐎硅棄瀹抽惃鍕閸婃瑩娅庢禒顧琽nt-size=312.5%閻ㄥ墔em婢堆冪毈濮ｆ柨鈧拷
		var size = 25.6;

		if(window.document.body.offsetWidth <= 720) {
			size = 17;
		} else if(window.document.body.offsetWidth <= 975 && window.document.body.offsetWidth > 720) {
			size = 20;
		} else {
			size = 25.6;
		}

		let newfontSize = (window.document.body.offsetWidth / size).toFixed(2);

		var obj = document.getElementsByTagName('html');
		obj[0].style.fontSize = newfontSize + "%"
	}

	/* 閻╂垵鎯夌粣妤€褰涙径褍鐨崣鎴犳晸閺€鐟板綁閺冿拷 */
	window.addEventListener('resize', function() {
		change();
	}, false);

})();
