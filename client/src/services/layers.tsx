import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/layers'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const getOne = (id: Number) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then((response) => response.data)
}

export default {
  getAll,
  getOne,
}
