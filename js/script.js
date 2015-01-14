/**
 * @project frontend-youtube
 * @author Sergio Merida <tabarinisergio@gmail.com> 
 * Save all the data in arrays and makes easier manage with knockout
*/

function loadVideo(youtubeName,youtubeVideoId,youtubeView,youtubeLike){
	$(".modal-content").empty();
	$(".modal-content").append("<div class=\"embed-responsive embed-responsive-16by9\"><iframe class=\"embed-responsive-item\" width=\"560\" height=\"315\" src=\"http://www.youtube.com/embed/"+youtubeVideoId+"\" frameborder=\"0\" allowfullscreen></iframe></div><br><br><span>Name: <strong>"+youtubeName+"</strong></span><br><span>Views: <strong>"+youtubeView+"</strong></span><br><span>Likes: <strong>"+youtubeLike+"</strong></span><br><span>Watch on youtube: <a href='https://www.youtube.com/watch?v="+youtubeVideoId+"'>https://www.youtube.com/watch?v="+youtubeVideoId+"</a>");
};


stringUrl="";
UrlData = "";
viewCount = [];
likeCount = [];
commentCount = [];
id = [];
title = [];
description = [];
image = [];
var initialData = []
/**
 * Dropdown of filters 
*/

$(document).ready(function() {
	$('.dropdown-toggle').dropdown()
});

$(document).ready(function($) {
	$.ajax({
		url : "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo&channelId=UCutAQ7OXuxEZ1Cw3ZPmPOZA&part=snippet&maxResults=50&format=json",
		dataType : "jsonp",
		success : function(parsed_json) {
	
		for (var i = 0; i <= 49; i++) {
			if (i==49){
				stringUrl = stringUrl + parsed_json["items"][i]["id"]["videoId"];
			}else{
				stringUrl = parsed_json["items"][i]["id"]["videoId"]+ "%2C+" +stringUrl
			}; /*End of for*/		
		};/*Succes*/
		UrlData = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+statistics&id="+stringUrl+"&maxResults=10&key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo";
		console.log(UrlData)
		$.ajax({
			url: UrlData,
			dataType : "jsonp",
			success : function(parsed_jso) {
				for (var e = 0; e<=49; e++) {
					title.push(parsed_jso["items"][e]["snippet"]["title"])
					id.push(parsed_jso["items"][e]["id"])
					description.push(parsed_jso["items"][e]["snippet"]["description"])		
					viewCount.push(parsed_jso["items"][e]["statistics"]["viewCount"])
					likeCount.push(parsed_jso["items"][e]["statistics"]["likeCount"])
					commentCount.push(parsed_jso["items"][e]["statistics"]["commentCount"])
					image.push(parsed_jso["items"][e]["snippet"]["thumbnails"]["default"]["url"])
				};			
			console.log(id)
			console.log(title)
			
			for (var e = 0; e<=49; e++) {
				initialData.push(({name:title[e], images:image[e], view:viewCount[e], like:likeCount[e], comment:commentCount[e]
, ids:id[e]}))
			};

var ViewModel = function(items) {
    this.items = ko.observableArray(items);

	this.sortByName = function() {
        this.items.sort(function(a, b) {
            return a.name < b.name ? -1 : 1;
        });
        $('.videos').slideUp();  $('.videos').slideDown();
    };
    	this.sortByName_z_a = function() {
        this.items.sort(function(a, b) {
            return a.name > b.name ? -1 : 1;
        });
    };

	this.sortByLikes = function() {
        this.items.sort(function(c, d) {
            return c.like > d.like ? -1 : 1;
        });
    };
	
	this.sortByViews = function() {
        this.items.sort(function(c, d) {
            return c.view > d.view ? -1 : 1;
        });
    };
    	this.sortByLestViews = function() {
        this.items.sort(function(c, d) {
            return c.view < d.view ? -1 : 1;
        });
    };

	
	this.sortByComments = function() {
        this.items.sort(function(c, d) {
            return c.comment < d.comment ? -1 : 1;
        });
    };     

    	this.sortByLestComments = function() {
        this.items.sort(function(c, d) {
            return c.comment > d.comment ? -1 : 1;
        });
    };

    this.gridOptions = {
        data: this.items,
        rowTemplate: "rowTmpl",
        useKOTemplates: true,
        height: 415,

        columns: [ 
            {
                title: "Name"
            },
            {
                title: "Image"   
            },
			{
				title: "View Count"
			},
			{
				title: "Like Count"
			},
			{
				title: "Comment Count"
			},
        ],
	pageable: {
        // we don't set any DataSource here
        pageSize: 3,
        buttonCount: 1
      },
    };
};


ko.applyBindings(new ViewModel(initialData));

			}
		}); /*End of second ajax call*/
		} /*end of variable with if and else*/

	});/*End of first ajax call*/
	$(".botonSearch").click(function(){
		var busqueda = $(".busqueda1").val();
			$(".busqueda1").val("");
			if(busqueda.length!=0){
				$(".modal-content").empty();
				for (var i = 0; i <=49; i++) {
					var datojson = initialData[i]['name'].toLowerCase();
					if(datojson.indexOf(busqueda)>-1){
						$(".modal-content").append("<div class='eachResult'><strong>Title: "+initialData[i]['name']+"</strong><br>"+"</div>");
						$(".modal-content").append('<button type="button" onclick="loadVideo(\''+initialData[i]['name']+'\',\''+initialData[i]['ids']+'\',\''+initialData[i]['view']+'\',\''+initialData[i]['like']+'\')" class="btn btn-primary" data-dismiss="modal">Load video</button>');
					
					};//cierre de segundo if

				};//cierre de for
			}; /*cierre primer if*/
			

	});
	
});/*End of ready function*/ 







