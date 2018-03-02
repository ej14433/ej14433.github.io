'use strict'

var wrong = 0;
var right = 0;
var question = 0;

var body;
var sections;
var email;

function onSignIn(googleUser) {
  body     = document.getElementsByTagName('body')[0];
  sections = document.getElementsByClassName('question');

  var profile = googleUser.getBasicProfile();
  email       = profile.getEmail();

  console.log(sections[0]);
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

function Submit() {
  var sql = require('sqlite3');

  var db = sql.openDatabase('../data.db')

  db.serialize(function() {
    db.each('INSERT INTO results VALUES (?,?,?)',[email, right, wrong]);
  });

  db.close(function(err) {
    if(err) throw err;
    console.log('Close connection');
  });
}
