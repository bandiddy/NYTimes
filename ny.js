function startSearch () {

    var apiKey = "cf39c6a130964054954684fac7e98dc1"
    var search = $('#search').val();
    var beginDate = $("#startYear").val();
    var endDate = $("#endYear").val();
    
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
      'api-key': apiKey,
      'q': search,
    //   'begin_date': beginDate,
    //   'end_date': endDate,
    });
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).then(function(response) {
    console.log(response);


    var results = response.response.docs

    for (var i = 0; i < 8; i++) {

    var totalArticles = $("<div>")
    
     var articles = $("<div>")

     var titles = $("<h3>")
     
     
        titles.append(results[i].headline.main)
     articles.append(results[i].web_url)

     totalArticles.append(results[i].docs)

     $('#articles').append(totalArticles)
     $('#articles').append(titles)
     $('#articles').append(articles)
     
        
    }
    });
    
    };
    
    
    
    $(document).on('click', '#searchButton', startSearch);
