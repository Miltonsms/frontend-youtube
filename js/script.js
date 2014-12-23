
/* variables */

mil = [];

/* ingressos */
$(document).ready(function() {
	$("[data-toggle=popover]")
		.popover({html:true})
	});
jQuery(document).ready(function($) {
	$.ajax({url : "https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+statistics&id=UaMBtjxvuMA&maxResults=50&key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo",
		dataType : "jsonp",
			success : function(parsed_json) {
				mil.push(parsed_json["items"]["id"]["Idvideo"])
					$(".milton").append(mil);

											}
									});
								});

$(document).ready(function()
{
$(".uno").click(function () {
$('.ocultar ').toggle("slow");
});
});

