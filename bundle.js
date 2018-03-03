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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCIndXNlIHN0cmljdCdcblxudmFyIHdyb25nID0gMDtcbnZhciByaWdodCA9IDA7XG52YXIgcXVlc3Rpb24gPSAwO1xuXG52YXIgYm9keTtcbnZhciBzZWN0aW9ucztcbnZhciBlbWFpbDtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxudmFyIGNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUM0Ung5UXY4LVZLNHU5ZGpCUEJLYldGaUd2N0hCQktId1wiLFxuICBhdXRoRG9tYWluOiBcIm1lbW9yeS10ZXN0LTE5NjcxMi5maXJlYmFzZWFwcC5jb21cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9tZW1vcnktdGVzdC0xOTY3MTIuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcIm1lbW9yeS10ZXN0LTE5NjcxMlwiLFxuICBzdG9yYWdlQnVja2V0OiBcIlwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyNTYzNjY3MDg4MTJcIlxufTtcblxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xudmFyIHJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdtZXNzYWdlcycpO1xuXG53aW5kb3cub25TaWduSW4gPSBmdW5jdGlvbihnb29nbGVVc2VyKSB7XG4gIGJvZHkgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgc2VjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdxdWVzdGlvbicpO1xuXG4gIHZhciBwcm9maWxlID0gZ29vZ2xlVXNlci5nZXRCYXNpY1Byb2ZpbGUoKTtcbiAgZW1haWwgICAgICAgPSBwcm9maWxlLmdldEVtYWlsKCk7XG5cbiAgY29uc29sZS5sb2coc2VjdGlvbnNbMF0pO1xuICBzZWN0aW9uc1swXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn07XG5cbndpbmRvdy5Xcm9uZyA9IGZ1bmN0aW9uKCkge1xuICB3cm9uZysrO1xuICBjb25zb2xlLmxvZyh3cm9uZyk7XG59O1xuXG53aW5kb3cuUmlnaHQgPSBmdW5jdGlvbihpZCkge1xuICBzZWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1ZXN0aW9uJyk7IC8vUkVNT1ZFIEZPUiBMSVZFXG4gIHNlY3Rpb25zW3F1ZXN0aW9uXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBxdWVzdGlvbisrO1xuICByaWdodCsrO1xuICBzZWN0aW9uc1txdWVzdGlvbl0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgY29uc29sZS5sb2cocmlnaHQpO1xufTtcblxud2luZG93LlN1Ym1pdCA9IGZ1bmN0aW9uKCkge1xuICBzYXZlTWVzc2FnZShlbWFpbCwgcmlnaHQsIHdyb25nKTtcbn07XG5cbmZ1bmN0aW9uIHNhdmVNZXNzYWdlKGVtYWlsLCByaWdodCwgd3JvbmcpIHtcbiAgdmFyIG5ld01lc3NhZ2VSZWYgPSByZWYucHVzaCgpO1xuICBuZXdNZXNzYWdlUmVmLnNldCh7XG4gICAgZW1haWw6ZW1haWwsXG4gICAgcmlnaHQ6cmlnaHQsXG4gICAgd3Jvbmc6d3JvbmdcbiAgfSk7XG59O1xuXG4vLyB3aW5kb3cuU3VibWl0ID0gZnVuY3Rpb24oKSB7XG4vL1xuLy8gICBjb25zb2xlLmxvZygnc3VibWl0Jyk7XG4vL1xuLy8gICB2YXIgc3FsID0gcmVxdWlyZSgnc3FsaXRlMycpO1xuLy9cbi8vICAgdmFyIGRiID0gbmV3IHNxbC5EYXRhYmFzZSgnZGF0YS5kYicsIGZ1bmN0aW9uKGVycikge1xuLy8gICAgIGlmKGVycikgdGhyb3cgZXJyO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIVwiKTtcbi8vICAgfSk7XG4vL1xuLy8gICBkYi5zZXJpYWxpemUoZnVuY3Rpb24oKSB7XG4vLyAgICAgZGIuZWFjaCgnSU5TRVJUIElOVE8gcmVzdWx0cyBWQUxVRVMgKD8sPyw/KScsW2VtYWlsLCByaWdodCwgd3JvbmddKTtcbi8vICAgfSk7XG4vL1xuLy8gICBkYi5jbG9zZShmdW5jdGlvbihlcnIpIHtcbi8vICAgICBpZihlcnIpIHRocm93IGVycjtcbi8vICAgICBjb25zb2xlLmxvZygnQ2xvc2UgY29ubmVjdGlvbicpO1xuLy8gICB9KTtcbi8vIH1cbiJdfQ==
