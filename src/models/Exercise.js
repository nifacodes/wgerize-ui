import axios from "axios";

export default class Exercise {
  constructor(id) {
    this.id = id;
  }

  async getExercise() {
    try {
      this.exercise = await axios({
        url: `https://wger.de/api/v2/exercise/${this.id}`,
        method: "GET"
      });
    } catch (err) {
      console.log("Get Exercise " + err);
    }
  }

  async getImage() {
    try {
      this.image = await axios({
        url: `https://wger.de/api/v2/exerciseimage/?exercise=${this.id}`,
        method: "GET"
      });

    } catch (err) {
      console.log("Get Exercise " + err);
    }
  }


}
