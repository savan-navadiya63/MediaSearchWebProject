import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;   // import API keys from environment variables
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY;
 

export async function fetchPhotos(query, page = 1, per_page = 20) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page }, // query parameters
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }, // headers and authentication
  });
  return response.data;
}


export async function fetchVideos(query, per_page = 15) {
  const response = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, per_page },
    headers: { Authorization: PEXELS_KEY },
  });
  return response.data;
}


export async function fetchGIF(query, limit = 20) {
  const response = await axios.get("https://tenor.googleapis.com/v2/search", {
    params: { q: query, key: TENOR_KEY, limit },
  });
  return response.data;
}
