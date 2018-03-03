(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCIndXNlIHN0cmljdCdcblxudmFyIHdyb25nID0gMDtcbnZhciByaWdodCA9IDA7XG52YXIgcXVlc3Rpb24gPSAwO1xuXG52YXIgYm9keTtcbnZhciBzZWN0aW9ucztcbnZhciBlbWFpbDtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxudmFyIGNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUM0Ung5UXY4LVZLNHU5ZGpCUEJLYldGaUd2N0hCQktId1wiLFxuICBhdXRoRG9tYWluOiBcIm1lbW9yeS10ZXN0LTE5NjcxMi5maXJlYmFzZWFwcC5jb21cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9tZW1vcnktdGVzdC0xOTY3MTIuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcIm1lbW9yeS10ZXN0LTE5NjcxMlwiLFxuICBzdG9yYWdlQnVja2V0OiBcIlwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyNTYzNjY3MDg4MTJcIlxufTtcblxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xudmFyIHJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdtZXNzYWdlcycpO1xuXG53aW5kb3cub25TaWduSW4gPSBmdW5jdGlvbihnb29nbGVVc2VyKSB7XG4gIGJvZHkgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgc2VjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdxdWVzdGlvbicpO1xuXG4gIHZhciBwcm9maWxlID0gZ29vZ2xlVXNlci5nZXRCYXNpY1Byb2ZpbGUoKTtcbiAgZW1haWwgICAgICAgPSBwcm9maWxlLmdldEVtYWlsKCk7XG5cbiAgc2VjdGlvbnNbMF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59O1xuXG53aW5kb3cuV3JvbmcgPSBmdW5jdGlvbigpIHtcbiAgd3JvbmcrKztcbn07XG5cbndpbmRvdy5SaWdodCA9IGZ1bmN0aW9uKGlkKSB7XG4gIHNlY3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVlc3Rpb24nKTsgLy9SRU1PVkUgRk9SIExJVkVcbiAgc2VjdGlvbnNbcXVlc3Rpb25dLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHF1ZXN0aW9uKys7XG4gIHJpZ2h0Kys7XG4gIHNlY3Rpb25zW3F1ZXN0aW9uXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn07XG5cbndpbmRvdy5TdWJtaXQgPSBmdW5jdGlvbigpIHtcbiAgc2F2ZU1lc3NhZ2UoZW1haWwsIHJpZ2h0LCB3cm9uZyk7XG59O1xuXG5mdW5jdGlvbiBzYXZlTWVzc2FnZShlbWFpbCwgcmlnaHQsIHdyb25nKSB7XG4gIHZhciBuZXdSZXNwb25zZVJlZiA9IHJlZi5wdXNoKCk7XG4gIG5ld1Jlc3BvbnNlUmVmLnNldCh7XG4gICAgZW1haWw6ZW1haWwsXG4gICAgcmlnaHQ6cmlnaHQsXG4gICAgd3Jvbmc6d3JvbmdcbiAgfSk7XG59O1xuIl19
