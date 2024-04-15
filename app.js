// to get the url

// fetch('http://www.omdbapi.com/?apikey=61e576a4&t=jailer').then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data);
// }) 


let api = 'http://www.omdbapi.com/?apikey=61e576a4&t=';

let actor = document.getElementById('actor');
let director = document.getElementById('director');
let collection = document.getElementById('collection');
let date = document.getElementById('date');
let award = document.getElementById('awards');
let rating = document.getElementById('rating');
let poster = document.getElementById('poster');
let writer = document.getElementById('writer');
let plot = document.getElementById('plot');
let language = document.getElementById('lang');
let time = document.getElementById('time');




function search(){
    let name = document.getElementById('name');
    let movieName = api+name.value;
    console.log (movieName);
    fetch(movieName).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)

        title.innerText = data.Title;
        year.innerText = data.Year;
        actor.innerText = data.Actors;
        director.innerText = data.Director;
        collection.innerText = data.BoxOffice;
        date.innerText = data.DVD;
        rating.innerText = data.imdbRating;
        poster.src = data.Poster;
        writer.innerText = data.Writer;
        plot.innerText = data.Plot;
        award.innerText = data.Awards;
        language.innerText = data.Language;
        time.innerText = data.Runtime;
})
    name.value='';

}