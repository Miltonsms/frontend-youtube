$(document).ready(function () {
    //Knockout Test
        var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo&channelId=UCZJ7m7EnCNodqnu5SAtg8eQ&part=snippet%2Cid&order=viewCount&maxResults=5";
        var viewModel = {};
        $.getJSON(url, function (data) {
            viewModel.Model = data;
            ko.applyBindings(viewModel);
        });
    });
$(document).ready(function()
{
$(".uno").click(function () {
$('.ocultar ').toggle("slow");
});
});

//v22617585