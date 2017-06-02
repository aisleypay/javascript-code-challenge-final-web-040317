class PostView {
  constructor(post) {
    this.post = post
  }

  attachInput() {
    $("#photo-list").append(`<div>
                              <div><img src="${this.post.url}"></div>
                              <div>${this.post.caption}</div>
                             </div>`)
  }
}
