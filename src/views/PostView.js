class PostView {
  constructor(post) {
    this.post = post
  }

  attachInput() {
    $("#photo-list").append(`<div><img src="${this.post.url}"><div>${this.post.caption}</div></div>`)
  }
}
