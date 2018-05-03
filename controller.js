function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
    .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}

function News($scope){

	$scope.sources = [
		{
			name: 'WSJ',
			active:false,
			img: 'img/wsj.png'
		},{
			name: 'NYT',
			active:false,
			img: 'img/nytimes.png'
		},{
			name: 'WaPo',
			active:false,
			img: 'img/washingtonpost.png',
		},{
			name: 'Nattyreview',
			active:false,
			img: 'img/nationalreview.png'
		},{
			name: 'Politico',
			active:false,
			img: 'img/politico.png'
		},{
			name: 'Fox',
			active:false,
			img: 'img/foxnews.png'
		},{
			name: 'CNN',
			active:false,
			img: 'img/cnn.png',
		},{
			name: 'DailyCaller',
			active:false,
			img: 'img/dailycaller.png'
		},{
			name: 'TheBlaze',
			active:false,
			img: 'img/theblaze.png'
		},{
			name: 'Drudge',
			active:false,
			img: 'img/drudgereport.png'
		},{
			name: 'RedState',
			active:false,
			img: 'img/redstate.png'
		},{
			name: 'Infowars',
			active:false,
			img: 'img/infowars.png'
		},{
			name: 'Breitbart',
			active:false,
			img: 'img/puke.png'
		},{
			name: 'TPM',
			active:false,
			img: 'img/talkingpointsmemo.png'
		},{
			name: 'DailyMail',
			active:false,
			img: 'img/mail.png'
		},{
			name: 'Guardian',
			active: false,
			img: 'img/theguardian.png'
		},{
			name: 'ConservativeReview',
			active: false,
			img: 'img/conservativereview.png'
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
		$scope.shareLink();
	};

	var bActive = false;
	
	$scope.all = function(){
		bActive = !bActive;
		angular.forEach($scope.sources, function(s){
			
				s.active = bActive;
		});
		if (bActive == true) {
			document.getElementById("alltoggle").innerHTML = "Hide All";
		} else {
			document.getElementById("alltoggle").innerHTML = "Show All";
		}
		
		$scope.shareLink();
	};
	
	$scope.spanActive = function(){
		return bActive;
	};
	
	//initial setup from URL params
	var allParam = findGetParameter('all');
	if (allParam == 'true') {
		$scope.all();
		console.log('all is true');
	} else {
		console.log('all is not true');
	}
	
		$scope.init = function(){
		angular.forEach($scope.sources, function(s){
			
				if (findGetParameter(s.name) == 'true') {
					s.active = true;
					console.log(s.name + ' is true');
				}
		});
		
		
	};
	
	$scope.init();
	
	$scope.shareLink = function(){
		var linkText = 'https://xibanya.github.io/frontpages';
		var bAllInactive = true;
		var bAllActive = true;
					angular.forEach($scope.sources, function(s){
				if (s.active == true) {
					if (bAllInactive == true) {
						
						linkText += '/index.html?' + s.name + '=true';
						bAllInactive = false;
					}
					else {
						linkText += '&' + s.name + '=true';
					}
					} else {
						bAllActive = false;
					}
					
					});	
		
		if (bAllActive == true) {
			
			linkText = 'https://xibanya.github.io/frontpages/index.html?all=true';		
		}
		if (bAllInactive == true) {
			var linkText = 'https://xibanya.github.io/frontpages';
		}
		
		document.getElementById("share").value = linkText;
		console.log(linkText);
	};
	
	$scope.shareLink();

}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("footer").innerHTML = myObj.pushed_at;
    }
};
xmlhttp.open("GET", "https://api.github.com/repos/xibanya/frontpages", true);
xmlhttp.setRequestHeader("Accept", "application/vnd.github.v3+json");
xmlhttp.send();
