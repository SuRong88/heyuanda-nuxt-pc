import axios from 'axios'
let options = {}
if (process.server) {
  options.baseURL = `http://www.techviewinfo.com/api/`
} else {
  options.baseURL = `http://www.techviewinfo.com/api/`
}

export default axios.create(options)