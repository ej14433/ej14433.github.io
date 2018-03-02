'use strict'

var wrong = 0;
var right = 0;
var question = 0;

var body;
var sections;

function onSignIn(googleUser) {
  body = document.getElementsByTagName('body')[0];
  sections = document.getElementsByClassName('question');

  var profile = googleUser.getBasicProfile();
  var email   = profile.getEmail();

  console.log(section[0]);
  sections[0].style.display = 'block';
};

function Wrong() {
  wrong++;
  console.log(wrong);
};

function Right(id) {
  sections = document.getElementsByClassName('question'); //REMOVE FOR LIVE
  sections[question].style.display = 'none';
  question++;
  right++;
  sections[question].style.display = 'block';

  console.log(right);
};
