/**
 * @project frontend-youtube
 * @author Sergio Merida <tabarinisergio@gmail.com> 
 * Bring all the Id and then we save in UrlData with the new Url
*/
stringUrl="";
UrlData = "";
viewCount = [];
titulo = [];
description =[];
$(document).ready(function() {
	$('.dropdown-toggle').dropdown()
});

$(document).ready(function($) {
	$.ajax({
		url : "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo&channelId=UCutAQ7OXuxEZ1Cw3ZPmPOZA&part=snippet&maxResults=10&format=json",
		dataType : "jsonp",
		success : function(parsed_json) {
	
		for (var i = 0; i <= 9; i++) {
			if (i==9){
				stringUrl = stringUrl + parsed_json["items"][i]["id"]["videoId"];
			}else{
				stringUrl = parsed_json["items"][i]["id"]["videoId"]+ "%2C+" +stringUrl
			};		
		};
		UrlData = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+statistics&id="+stringUrl+"&maxResults=10&key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo";
		console.log(UrlData)
		$.ajax({
		url: UrlData,
		dataType : "jsonp",
		success : function(parsed_jso) {
			for (var e = 0; e<=9; e++) {
				viewCount.push(parsed_jso["items"][e]["statistics"]["viewCount"])
			};	
	console.log(viewCount)
		}
				
	});


		}
	
	});
	
});
jQuery(document).ready(function($) {
$.ajax({
url : "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=05d4b311160508e4320ec650346e45c8&format=json",
dataType : "jsonp",
success : function(parsed_json) {
	titulo.push(parsed_json["items"]["snippet"]["title"])
	id.push(parsed_json["items"]["id"])
	description.push(parsed_json["items"]["snippet"]["description"])
		$(".milton").append(titulo+ id);

	};
});
});