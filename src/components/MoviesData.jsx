// const page = 1;
// const url = `https://api.themoviedb.org/3/discover/movie?api_key=cb43d8e789fe997e8f71935951457b0b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=`;



const Navigation = [
  {
    id: 1,
    page: "New Releases",
   }, 
   {
    id: 2,
    page: "Trending",
   }, 
   {
    id: 3,
    page: "Coming Soon",
   }, 
   {
    id: 4,
    page: "Favourites",
   }, 
   {
    id: 5,
    page: "Watch Later",
   }, 
  
]


const FiltersData = [
    {
      id: 1,
      filterNo: 0,
      filterType: "All"
    },
    {
      id: 2,
      filterNo: 35,
      filterType: "Commedy"
    },
    {
      id: 3,
      filterNo: 28,
      filterType: "Horror"
    },
    {
      id: 4,
      filterNo: 12,
      filterType: "Friction"
    },
  ]

  export {FiltersData, Navigation};