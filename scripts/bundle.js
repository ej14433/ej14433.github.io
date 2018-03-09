(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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
  email       = profile.getEmail();

  var signin  = document.getElementById('signin');
  signin.style.display = 'none';

  section[question].style.display = 'block';
};

window.Wrong = function() {
  wrong++;
};

window.Right = function() {
  sections = document.getElementsByClassName('question'); //REMOVE FOR LIVE
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
  intro.style.display = 'none';
  test.style.display = 'block';

};

function saveMessage(email, right, wrong) {
  var newResponseRef = ref.push();
  newResponseRef.set({
    email:email,
    right:right,
    wrong:wrong
  });
};

},{}]},{},[1]);
