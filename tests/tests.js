var chai = require('chai');
var expect = chai.expect;
var $ = require('jquery');

var Post = require('../app/scripts/models.js').Post;
var PostView = require('../app/scripts/views.js').PostView;

// ##############################################
// Model Tests
// ##############################################
describe('Post', function(){

  describe('fetch', function(){
    it('should return a promise', function(){
      var promise = Post.fetch();
      expect(promise).to.respondTo('then');
    });

    it('should resolve with an array of posts', function(done){
      Post.fetch().then(function(data){
        var post = data[0];

        expect(post).to.have.property('title');
        expect(post).to.have.property('body');
        expect(post).to.have.property('_id');

        done();
      })
    });
  });


  describe('create', function(){
    it('should send a POST request', function(){
        Post.create();
    });

    it('should resolve with a created post, including an _id', function(){


    });


  })

});

// ##############################################
// View Tests
// ##############################################
describe('PostView', function(){
  var view, posts;

  beforeEach(function(){
    posts = [{title: 'Cool', body: 'awesome'}];
    view = new PostView();
    console.log($('.posts').length);
  });

  describe('showPosts', function(){

    it('should take a post array and list them', function(){
      view.showPosts(posts);
      expect($('.posts li').length).to.equal(1);
      expect($('.posts li').first().find('h1').text()).to.equal('Cool');
      expect($('.posts li').first().find('p').text()).to.equal('awesome');
    });

  });

});




describe('create post form', function(){ // the high level of what you're testing


      // the smaller piece of what you're testing
  it('should trigger a create:post event on the document with the title and body', function(done){


    $(document).on('create:post', function(event, post){
      // event.preventDefault(); if necessary

      expect(post).to.have.property('title');
      expect(post).to.have.property('body');

      expect(post.title).to.equal('Title');
      expect(post.body).to.equal('Body');


      done();


    });
    // with TDD, you have to imagine/envision what your code will look like at this point, as well as class names\
    // this is just your test suite acting out the form being filled and submitted

        $('.form-title').val('Title');
        $('.form-body').val('Body');
        $('.form-button').click(); // could choose the form itself and use the submit(), just more accurate


  });




});
