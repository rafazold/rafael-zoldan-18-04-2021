import axios from 'axios';

export const accuWeather = axios.create({
  baseURL: process.env.API_BASE_URL,
});

// export const weatherRoutes = {
//   AUTOCOMPLETE: '/locations/v1/cities/autocomplete', // params: apikey, q
//   SEARCH: '/locations/v1/cities/search', // params: apikey, q
//   GEOPOSITION: '/locations/v1/cities/geoposition/search', // params: apikey, q=lat,lon
//   CURRENT_WEATHER: '/currentconditions/v1/', // params: locationKey, metric(bool)
//   DAILY: '/forecasts/v1/daily/5day/', // params: locationKey, metric(bool)
// };
export const weatherRoutes = {
  AUTOCOMPLETE: '/locations/v1/cities/autocomplete', // params: apikey, q
  SEARCH: '/locations/v1/cities/search', // params: apikey, q
  GEOPOSITION: '/geoposition', // params: apikey, q=lat,lon
  CURRENT_WEATHER: '/currentconditions', // params: locationKey, metric(bool)
  DAILY: '/forecast', // params: locationKey, metric(bool)
};
