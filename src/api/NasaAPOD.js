import axios from "axios";

const API_KEY = "SKH0MtuSFQC4rLekeAU7L31cnLh2VBMhQH4pVpvq";

export default axios.create({
  baseURL: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
});
