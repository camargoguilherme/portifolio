import axios from "axios";

const api = axios.create({
  baseURL: "https://api-portifolio.herokuapp.com" // URL to services
});


export const profile = () => {
  const profile = api.get('/profile').then(profile => {return profile.data})
  return profile
}

const about = () => {
  const about = api.get('/about')
  return about.data
}

const skills = () => {
  const skills = api.get('/skill')
  return skills.data
}

const details = () => {
  const details = api.get('/detail')
  return details.data
}

export default api;