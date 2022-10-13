function gameGrouping(games) {
  let filtered = {};

  if (games.length < 2) {
    return `"Data cannot be compared"`;
  }

  // 1. Get Variant of Genre from All games
  function genreVariant() {
    let allGenreGames = [];
    // -> get all genre from all games array objects <-
    for (let i = 0; i < games.length; i++) {
      allGenreGames[i] = games[i].genre;
    }
    // -> filtering genre that duplicate to get variant <-
    let variant = allGenreGames.filter((val, index) => {
      return allGenreGames.indexOf(val) === index;
    });

    return variant;
  }

  for (let i = 0; i < genreVariant().length; i++) {
    //2. filter title game by genre variant
    let allTitleGames = [];
    for (let j = 0; j < games.length; j++) {
      if (genreVariant()[i] == games[j].genre) {
        allTitleGames[j] = games[j].title;
      }
    }

    let emptyRemove = allTitleGames.filter((el) => {
      return el != null;
    });

    //3. create object
    titleObj = {};
    titleObj.title = emptyRemove;

    filtered[genreVariant()[i]] = titleObj;
  }

  //   filtered = titleObj;
  return filtered; // TODO: replace this
}

const allGames = [
  {
    title: "The Last of Us Part I",
    genre: "actionAdventure",
    developer: "Naughty Dog",
    rating: 9.6,
  },
  {
    title: "WWE 2K22",
    genre: "fighting",
    developer: "Visual Concepts",
    rating: 7.5,
  },
  {
    title: "Tom Clancy's Ghost Recon: Wildlands",
    genre: "firstPersonShooter",
    developer: "Ubisoft Belgrade",
    rating: 7.9,
  },
  { title: "The Sims 4", genre: "simulation", developer: "Maxis", rating: 9.2 },
  {
    title: "Tekken 7",
    genre: "fighting",
    developer: "BANDAI NAMCO Studios",
    rating: 9.5,
  },
  {
    title: "The Witcher 3: Wild Hunt",
    genre: "actionAdventure",
    developer: "CD Projekt Red",
    rating: 10,
  },
  {
    title: "Cities: Skylines",
    genre: "simulation",
    developer: "Colossal Order",
    rating: 9.4,
  },
  {
    title: "Far Cry 5",
    genre: "firstPersonShooter",
    developer: "Ubisoft Montreal",
    rating: 8.9,
  },
  {
    title: "Project CARS 3",
    genre: "racing",
    developer: "Slightly Mad Studios",
    rating: 6.8,
  },
  {
    title: "Hot Wheels Unleashed",
    genre: "racing",
    developer: "Milestone",
    rating: 9.2,
  },
];

console.log(gameGrouping(allGames));
console.log(
  gameGrouping([
    {
      title: "Tekken 7",
      genre: "fighting",
      developer: "BANDAI NAMCO Studios",
      rating: 9.5,
    },
  ])
);
