import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = "8d372026b480ff9cd2002f985df4fe4059baf33a";
    try {
      this.axiosResults = await axios({
        url: `https://wger.de/api/v2/exercise/?muscles=${this.query}&status=2&limit=100&language=2`,

        method: "GET"
      });
    } catch (err) {
      console.log("Get Results " + err);
    }

  }
}
