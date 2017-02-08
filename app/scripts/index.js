var $ = require('jquery');
var models = require('./models');
var views = require('./views');

$(function(){

  var view = new views.PostView();

  $(document).on('posts:fetch', function(event, posts){
    view.showPosts(posts);
    console.log(posts);
  });

  models.Post.fetch();

  $(document).on('create:post', function(event, data){
    models.Post.create(data);
  });

});
