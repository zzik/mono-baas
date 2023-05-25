import axios from 'axios'

export class Service {
  constructor({ resourceType }) {
    this.resourceType = resourceType
  }

  baseUrl = "https://api.baasic.com/beta/cardealer/resources/"

  async list() {
    const data = await axios.get(this.baseUrl + this.resourceType)
    return data
  }

  // ?
}
