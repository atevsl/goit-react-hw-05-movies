import axios from 'axios';
const APIkey = '34c962a38697839d2de5b0a80a471826';

async function onFetch() {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIkey}`
  );
  return resp.data.results;
}
async function onFetchSearch(search) {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${search}`
  );
}
async function onFetchFilm(id) {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}`
  );
}

async function onFetchCast(id) {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIkey}`
  );
}

async function onFetchReviews(id) {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIkey}`
  );
}

export { onFetch, onFetchFilm, onFetchCast, onFetchReviews, onFetchSearch };
