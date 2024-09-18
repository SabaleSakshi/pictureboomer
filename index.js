let movies = [
  {
    name: "Deadpool & Wolverine",
    img: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/deadpool-wolverine_866a70e7-fb48-4f35-a44b-41594691ac76_500x749.jpg?v=1724680738",
    rating: "8/10.IMDb",
    video:"https://www.youtube.com/embed/73_1biulkYk?si=HzIGCrKN9Z4iPh-W/rel=0&modesbranding=1",
  },

  {
    name: "Friends",
    img: "https://www.movieposters.com/cdn/shop/products/0cc34c96039795917466ef4197350715_201bf82b-af1c-42ec-9339-919768fe79e0_240x360_crop_center.progressive.jpg?v=1573654933",
    rating: "8.9/10.IMDb",
    video:"https://www.youtube.com/embed/RasWhgd4vao?si=sfWpUXxq2z0x4FgB"
  },
  {
    name: "Squid Game",
    img: "https://www.movieposters.com/cdn/shop/products/54440_240x360_crop_center.progressive.jpg?v=1646167720",
    rating: "8/10.IMDb",
    video:"https://www.youtube.com/embed/oqxAJKy0ii4?si=GtVkGP4qu33MVyG4"
  },
  {
    name: "Jurassic Park",
    img: "https://www.movieposters.com/cdn/shop/products/4940c5878babf3dc5d2ca567b7558178_9e62fc4c-4116-48e5-a4f5-3a99c73ae7b1_240x360_crop_center.progressive.jpg?v=1573651499",
    rating: "8.2/10.IMDb",
    video:"https://www.youtube.com/embed/lc0UehYemQA?si=dOxah04uRW2XKyEL"
  },
  {
    name: "Iron Man",
    img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/0/d/d/small-spos8825-poster-iron-man-1-a-official-sticker-sl-9829-wall-original-imaghs5pygznwxu9.jpeg?q=20&crop=false",
    rating: "7.9/10.IMDb",
    video:"https://www.youtube.com/embed/8ugaeA-nMTc?si=bvecykzB31KV_WDg" 
  },
  {
    name: "Joker",
    img: "https://www.movieposters.com/cdn/shop/products/5cae019e64c0ee10ead36a00e60f0137_eeb2d749-fdbe-46fd-978a-870cc7e0ddf7_240x360_crop_center.progressive.jpg?v=1573593942",
    rating: "8.4/10.IMDb",
    video:"https://www.youtube.com/embed/_OKAwz2MsJs?si=tva7Qq1hz5BqXKBW"
  },
  {
    name: "Titanic",
    img: "https://www.movieposters.com/cdn/shop/products/c104f1bfed20481f35bc96cb9addc940_240x360_crop_center.progressive.jpg?v=1573588574",
    rating: "7.9/10.IMDb",
    video:"https://www.youtube.com/embed/I7c1etV7D7g?si=JnT9KhOZDQZUi-lH"
  },
  {
    name: "Loki",
    img: "https://www.movieposters.com/cdn/shop/files/loki_zoi5lele_240x360_crop_center.progressive.jpg?v=1693682755",
    rating: "8.2/10.IMDb",
    video:"https://www.youtube.com/embed/nW948Va-l10?si=sRc8gacrONb8GDk_" 
  },
  {
    name: "Wednesday",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfnj2Pa4rDvrH2TYPrbQKe-hTibJXhNzPqsQ&s",
    rating: "8.1/10.IMDb",
    video:"https://www.youtube.com/embed/Di310WS8zLk?si=WnMmfiHIJCevNSqw"
  },
  {
    name: "Devdas",
    img: "https://www.whosampled.com/static/images/media/blog/2016/03/740/devdas.jpg",
    rating: "8.1/10.IMDb",
    video:"https://www.youtube.com/embed/8tuHQWGMQwY?si=K0PRXRIzjoPe-VYX"
  },
  {
    name: "Jab We Met",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckL2TqjTUR1PKENL0zVi6_eor6t2J7bgTiA&s",
    rating: "8.1/10.IMDb",
    video:"https://www.youtube.com/embed/d9QH-LXxSQ0?si=ShZxTXBF8y8LCvKz"
  },
  {
    name: "Lagaan",
    img: "https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg",
    rating: "8.1/10.IMDb",
    video:"https://www.youtube.com/embed/rZPbpymefuE?si=5S9IchhQSaHu9tNY"
  },
  {
    name: "Andhadhund",
    img: "https://image.tmdb.org/t/p/original/66TM84iLYInGYrmOGZ0Fkceis6C.jpg",
    rating: "8.1/10.IMDb",
    video:"https://www.youtube.com/embed/2iVYI99VGaw?si=ksXSRKWwd_emHwao"
  },
  {
    name: "Razzi",
    img: "https://filmfare.wwmindia.com/content/2018/jun/021528721948.jpg",
    rating: "7.7/10.IMDb",
    video:"https://www.youtube.com/embed/YjMSttRJrhA?si=Ceb1dL9RVef9WZjY"
  },
  {
    name:"Uri",
    img:"https://www.scrolldroll.com/wp-content/uploads/2021/12/uri-bollywood-movies-based-on-true-stories.jpg",
    rating:"8.2/10.IMDb",
    video:"https://www.youtube.com/embed/Cg8sbRFS3zU?si=k_FN57xang02zSj8"
  },
  {
    name:"Neerja",
    img:"https://images.jdmagicbox.com/comp/jd_social/news/2018aug08/image-233126-x4lwad8kkx.jpg",
    rating:"7.6/10.IMDb",
    video:"https://www.youtube.com/embed/7779JrWy04g?si=2d6UPL7Djn9K06wo"
  }
 
  // name:"dhammal",
  // img:"https://www.bewakoof.com/blog/wp-content/uploads/2022/04/content_Dhamaal_2007_-_Bollywood_Comedy_Movies_-_Bewakoof_Blog.jpg",
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
             <iframe width="250px" height="200px" src="${data[i].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
