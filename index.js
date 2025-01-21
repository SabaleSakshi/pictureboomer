let movies = [
    {
      name: "Deadpool & Wolverine",
      img: "../images/deadpool.webp",
      rating: "8/10.IMDb",
      video:"https://www.youtube.com/embed/73_1biulkYk?si=HzIGCrKN9Z4iPh-W/rel=0&modesbranding=1",
    },
  
    {
      name: "Friends",
      img: "../images/friends.avif",
      rating: "8.9/10.IMDb",
      video:"https://www.youtube.com/embed/RasWhgd4vao?si=sfWpUXxq2z0x4FgB"
    },
    {
      name: "Squid Game",
      img: "../images/squidgame.avif",
      rating: "8/10.IMDb",
      video:"https://www.youtube.com/embed/oqxAJKy0ii4?si=GtVkGP4qu33MVyG4"
    },
    {
      name: "Jurassic Park",
      img: "../images/jurassicpark.avif",
      rating: "8.2/10.IMDb",
      video:"https://www.youtube.com/embed/lc0UehYemQA?si=dOxah04uRW2XKyEL"
    },
    {
      name: "Iron Man",
      img: "../images/ironMan.webp",
      rating: "7.9/10.IMDb",
      video:"https://www.youtube.com/embed/8ugaeA-nMTc?si=bvecykzB31KV_WDg" 
    },
    {
      name: "Joker",
      img: "../images/joker.avif",
      rating: "8.4/10.IMDb",
      video:"https://www.youtube.com/embed/_OKAwz2MsJs?si=tva7Qq1hz5BqXKBW"
    },
    {
      name: "Titanic",
      img: "../images/titanic.avif",
      rating: "7.9/10.IMDb",
      video:"https://www.youtube.com/embed/I7c1etV7D7g?si=JnT9KhOZDQZUi-lH"
    },
    {
      name: "Loki",
      img: "../images/loki.avif",
      rating: "8.2/10.IMDb",
      video:"https://www.youtube.com/embed/nW948Va-l10?si=sRc8gacrONb8GDk_" 
    },
    {
      name: "Wednesday",
      img: "../images/wednesday.jpg",
      rating: "8.1/10.IMDb",
      video:"https://www.youtube.com/embed/Di310WS8zLk?si=WnMmfiHIJCevNSqw"
    },
    {
      name: "Devdas",
      img: "../images/devdas.jpg",
      rating: "8.1/10.IMDb",
      video:"https://www.youtube.com/embed/8tuHQWGMQwY?si=K0PRXRIzjoPe-VYX"
    },
    {
      name: "Jab We Met",
      img: "../images/jabwemeet.jpg",
      rating: "8.1/10.IMDb",
      video:"https://www.youtube.com/embed/d9QH-LXxSQ0?si=ShZxTXBF8y8LCvKz"
    },
    {
      name: "Lagaan",
      img: "../images/lagaan.jpg",
      rating: "8.1/10.IMDb",
      video:"https://www.youtube.com/embed/rZPbpymefuE?si=5S9IchhQSaHu9tNY"
    },
    {
      name: "Andhadhund",
      img: "../images/andhadhun.jpg",
      rating: "8.1/10.IMDb",
      video:"https://www.youtube.com/embed/2iVYI99VGaw?si=ksXSRKWwd_emHwao"
    },
    {
      name: "Razzi",
      img: "../images/razzi.webp",
      rating: "7.7/10.IMDb",
      video:"https://www.youtube.com/embed/YjMSttRJrhA?si=Ceb1dL9RVef9WZjY"
    },
    {
      name:"Uri",
      img:"../images/uri.jpg",
      rating:"8.2/10.IMDb",
      video:"https://www.youtube.com/embed/Cg8sbRFS3zU?si=k_FN57xang02zSj8"
    },
    {
      name:"Neerja",
      img:"../images/neerja.avif",
      rating:"7.6/10.IMDb",
      video:"https://www.youtube.com/embed/7779JrWy04g?si=2d6UPL7Djn9K06wo"
    }
   
   
  ];
  
  function searchMovies() {
    let moviename = document.getElementById("input").value;
    // console.log(moviename);
    if (moviename !== "") {
      let result = movies.filter(function (movie) {
        return movie.name.toUpperCase().includes(moviename.toUpperCase());
      });
      displaymovie(result);
    } 
    else {
      displaymovie(movies);
    }
  }
  {/* <iframe width="250px" height="200px" src="${data[i].video}" autoplay></iframe> */}
  function displaymovie(data) {
    document.getElementById("movies").innerHTML = "";
  
    let htmlstr = ``;
  
    for (let i = 0; i < data.length; i++) {
      htmlstr =
        htmlstr +
        `
      <div class="movie">
          <div class="overlay">
              <div class="video">
               <iframe width="250px" height="200px" src="${data[i].video}?autoplay"></iframe>
              </div>
              <div class="details">
                  <h1>${data[i].name}</h1>
                  <h2>⭐${data[i].rating}</h2>
              </div>
          </div>
          <img class="poster" src="${data[i].img}" alt="${data[i].name}">
      </div>`;
    }
  
    document.getElementById("movies").innerHTML = htmlstr;
  }
  displaymovie(movies);