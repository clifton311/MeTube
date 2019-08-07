import axios from 'axios'

const KEY = 'AIzaSyCMQWEvVZsT4zpvaqltSgX-F_I-_YhcHMs'

const link = 'https://www.googleapis.com/youtube/v3'

export default axios.create({
  baseURL: link,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})