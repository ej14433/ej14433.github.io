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

  sections[0].style.display = 'block';
};

window.Wrong = function() {
  wrong++;
};

window.Right = function(id) {
  sections = document.getElementsByClassName('question'); //REMOVE FOR LIVE
  sections[question].style.display = 'none';
  question++;
  right++;
  sections[question].style.display = 'block';
};

window.Submit = function() {
  saveMessage(email, right, wrong);
};

function saveMessage(email, right, wrong) {
  var newResponseRef = ref.push();
  newResponseRef.set({
    email:email,
    right:right,
    wrong:wrong
  });
};
