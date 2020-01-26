export default class Likes {
  constructor() {
    this.likes = [];
  }

  addLike(id, title, author, initials = "H.V") {
    const like = { id, title, author, initials };
    this.likes.push(like);
    //persist data in local storage
    this.persistData();
    return like;
  }

  deleteLike(id) {
    const indx = this.likes.findIndex(elm => {
      return parseInt(elm.id) === parseInt(id);
    });
    this.likes.splice(indx, 1);
    this.persistData();

  }

  // return true if liked
  isLiked(id) {
    return this.likes.findIndex(el => el.id === id) !== -1;
  }

  getNumLikes() {
    return this.likes.length;
  }

  persistData() {
    localStorage.setItem("likes", JSON.stringify(this.likes));
  }

  retrieveStorage() {
    const storage = JSON.parse(localStorage.getItem("likes"));
    // restore from localStorage
    if (storage) {
      this.likes = storage;
    }
  }
}
