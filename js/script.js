$(document).ready(function () {
    //Knockout Test
        var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCZIdvJkrCNDjswEeRtMTbN6B9yEiz2pEo&channelId=UCRRxSTgPUY0q_YToaczc2BQ&part=snippet%2Cid&order=date&maxResults=5";
        var viewModel = {};
        $.getJSON(url, function (data) {
            viewModel.model = data;
            ko.applyBindings(viewModel);
        });
    });
