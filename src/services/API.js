import axios from 'axios';
const APIkey = '34c962a38697839d2de5b0a80a471826';

async function onFetch() {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIkey}`
  );
  return resp.data.results;
}
async function onFetchSearch(search) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${search}`
  );

  if (resp.status !== 200 || resp.data.total_results === 0) {
    throw new Error();
  } else return resp.data.results;
}
async function onFetchFilm(id) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}`
  );
  return resp.data;
}

async function onFetchCast(id) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIkey}`
  );
  return resp.data.cast;
}

async function onFetchReviews(id) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIkey}`
  );
  return resp.data.results;
}

export { onFetch, onFetchFilm, onFetchCast, onFetchReviews, onFetchSearch };
