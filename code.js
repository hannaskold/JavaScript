let movieData = require("./data");
let $ = require("jquery");

function renderMovie (movie){

    $("#image").attr("src", movie.img);
    $("#movieTitle").text(movie.title);
    $("#description").text(movie.description);

    let html = "";   
    for (let i = 0; i < movie.list.length; i++) {
        html += "<li>" + movie.list[i] + "</li>";        
     };   
     $("#list").append(html);
};

function changeStarRating(rating){
    $(".filled").removeClass("filled");
    for(let i=1; i<=rating; i++){
     $("[data-rating-id=" + i + "]").addClass("filled");     
  }
}

$(".stars").on("click", "span", function(e){
    let star = $(e.target);
    let rating = parseInt(star.attr("data-rating-id"));
    changeStarRating(rating)
});

renderMovie(movieData)