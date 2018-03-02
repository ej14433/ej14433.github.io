'use strict'

var wrong = 0;
var right = 0;

var body;

function onSignIn(googleUser) {
  body = document.getElementsByTagName('body')[0];

  var profile = googleUser.getBasicProfile();
  var email   = profile.getEmail();
  var section = document.getElementById('one');

  console.log(section);
  section.display = 'block';
};

function Wrong() {
  wrong++;
};

function Right(id) {
  console.log(id);
  right++;
};
