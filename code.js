function renderMovie (movie){

    document.getElementById("image").src = movie.img;
    document.getElementById("movieTitle").innerText = movie.title;
    document.getElementById("description").innerText = movie.description;

    let html = "";   
    for (let i = 0; i < movie.list.length; i++) {
        html += "<li>" + movie.list[i] + "</li>";        
     };   
     document.getElementById("list").innerHTML = html;
};
    renderMovie(movieData)