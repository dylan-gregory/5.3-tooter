/**
 * Project views
 */
var $ = require('jquery');
var template = require('../templates/post.hbs');
var template2 = require('../templates/application.hbs');

function PostView(){
  $('body').append(template2());
  $('body').append('<ul class="posts">');


// If a snag is hit later, it may not be recognizing an event handler, so this is how we'll implement that

  $('.form').on('submit', function(event){
    event.preventDefault();
    $(document).trigger('create:post', [{
      title: 'Cool',
      body: 'Cool'
    }]);

  });
}


PostView.prototype.showPosts = function(posts){
  console.log(posts);
  posts.forEach(function(post){
    console.log($('.posts').length);
    $('.posts').append(template(post));
  });
};

module.exports = {
 'PostView': PostView
};
