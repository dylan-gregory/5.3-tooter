/**
 * Project models
 */
var $ = require('jquery');

function Post(){

}

Post.fetch = function(){
  var promise = $.ajax('http://tiny-lasagna-server.herokuapp.com/collections/posts');
// we wrote it this way to make it testable - it gives Post.fetch a way to give something that can be tested

  promise.then(function(posts){
    $(document).trigger('posts:fetch', [posts]);
  });

  return promise;   //<--this is the value that we can test
};

Post.create = function(data){
  $.ajax({
      method: "POST",
      dataType: "json",
      url: "http://tiny-lasagna-server.herokuapp.com/collections/posts",
      data: data
    }).done(function(){
      Post.fetch();
    });
  };


module.exports = {
  'Post': Post
};
