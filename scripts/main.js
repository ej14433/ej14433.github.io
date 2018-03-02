'use strict'

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  // console.log("ID Token: " + id_token);

  console.log("Email: " + profile.getEmail());
  window.location.href = "http://ej14433.github.io/test.html";

  var email = profile.getEmail();
  var body = document.getElementsByTagName('body')[0];
  body.innerHTML += email;
  //body.innerHTML += 'email';
};
