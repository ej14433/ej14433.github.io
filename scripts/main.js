'use strict'

var wrong = 0;
var right = 0;
var question = 1;

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
  email   = profile.getEmail();

  var signin  = document.getElementById('signin');
  var intro   = document.getElementById('intro' );
  signin.style.display = 'none' ;
  intro.style.display  = 'block';
};

window.Wrong = function() {
  wrong++;
};

window.Right = function() {
  sections = document.getElementsByClassName('question');
  sections[question].style.display = 'none';
  question++;
  right++;
  sections[question].style.display = 'block';
};

window.Submit = function() {

  var section = document.getElementById('submit');
  var thanks  = document.getElementById('thanks');
  section.style.display = 'none' ;
  thanks.style.display  = 'block';

  saveMessage(email, right, wrong);
};

window.Next = function() {

  var intro = document.getElementById('intro');
  var test  = document.getElementById('test');
  intro.style.display = 'none' ;
  test.style.display  = 'block';
  sections[question].style.display = 'block';

};

function saveMessage(email, right, wrong) {
  var newResponseRef = ref.push();
  newResponseRef.set({
    email:email,
    right:right,
    wrong:wrong
  });
};
