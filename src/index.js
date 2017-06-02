$(document).ready(function(){
  $("#photo-form").submit(function(e) {
    e.preventDefault()

    var post = new Post(($("#photo-form :input").val()),($("#photo-form :input")[1].value) )
    var postView = new PostView(post)
    
    postView.attachInput()
  })
})
