'use strict'

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  // console.log('Full Name: ' + profile.getName());
  // console.log('Given Name: ' + profile.getGivenName());
  // console.log('Family Name: ' + profile.getFamilyName());
  // console.log("Image URL: " + profile.getImageUrl());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  // console.log("ID Token: " + id_token);

  console.log("Email: " + profile.getEmail());
  // window.location.href = "http://ej14433.github.io/test.html";

  //var email = profile.getEmail();
  //var body = document.getElementsByClassName('body');
  //body.innerHTML += email;
  //body.innerHTML += 'email';
};
