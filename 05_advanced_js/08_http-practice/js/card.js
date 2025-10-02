class Card {
  constructor(user, post) {
    this.user = user;
    this.post = post;
  }
  render() {
    this.card = document.createElement("div");
    this.card.className = "card-wrapper";
    this.card.innerHTML = `
    <div class= "header-wrapper">
        <div class="name-wrapper">
            <p class = "name">${this.user.name}</p>
            <a class="email" href=mailto:${this.user.email}>@${this.user.username} </a>
        </div>
    </div>
    <button class="btn btn-light">Х</button>
    <p class = "post-title">${this.post.title}</p>
    <p class = "post-body">${this.post.body}</p>
    `;
    this.delete();
    return this.card;
  }
  delete() {
    this.card.addEventListener("click", (e) => {
      let deleteTarget = e.target.closest(".btn");
      if (deleteTarget) {
        this.post.delete();
        this.card.remove();
      }
    });
  }
}

export default Card;
