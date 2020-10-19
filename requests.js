// const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";
const API_KEY = "6fb42e9418bec38c8684397fd9e8fd4c";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  // fetchMovies: `/discover/movie?api_key=${API_KEY}&with_genres=100`,
};
export default requests;
// 10749
