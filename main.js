'use strict'

var wrong = 0;
var right = 0;
var question = 0;

var body;
var sections;
var email;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC4Rx9Qv8-VK4u9djBPBKbWFiGv7HBBKHw",
  authDomain: "memory-test-196712.firebaseapp.com",
  databaseURL: "https://memory-test-196712.firebaseio.com",
  projectId: "memory-test-196712",
  storageBucket: "",
  messagingSenderId: "256366708812"
};

firebase.initializeApp(config);
var ref = firebase.database().ref('messages');

window.onSignIn = function(googleUser) {
  body     = document.getElementsByTagName('body')[0];
  sections = document.getElementsByClassName('question');

  var profile = googleUser.getBasicProfile();
  email       = profile.getEmail();

  console.log(sections[0]);
  sections[0].style.display = 'block';
};

window.Wrong = function() {
  wrong++;
  console.log(wrong);
};

window.Right = function(id) {
  sections = document.getElementsByClassName('question'); //REMOVE FOR LIVE
  sections[question].style.display = 'none';
  question++;
  right++;
  sections[question].style.display = 'block';

  console.log(right);
};

window.Submit = function() {
  saveMessage(email, right, wrong);
};

function saveMessage(email, right, wrong) {
  var newMessageRef = ref.push();
  newMessageRef.set({
    email:email,
    right:right,
    wrong:wrong
  });
};

// window.Submit = function() {
//
//   console.log('submit');
//
//   var sql = require('sqlite3');
//
//   var db = new sql.Database('data.db', function(err) {
//     if(err) throw err;
//     console.log("Connected!");
//   });
//
//   db.serialize(function() {
//     db.each('INSERT INTO results VALUES (?,?,?)',[email, right, wrong]);
//   });
//
//   db.close(function(err) {
//     if(err) throw err;
//     console.log('Close connection');
//   });
// }
