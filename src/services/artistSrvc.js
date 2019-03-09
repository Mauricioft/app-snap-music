import HTTP from '../http'

export default {
  async searchArtist(query) {
    // const response = await HTTP.get(`/search?q=${query}&type=${type}`)
    const response = await HTTP.get(`/search?q=${query}&type=artist`)
    return response.data
  },
}