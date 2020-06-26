import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Mercury } from './../src/mercury.js';
import { Venus } from './../src/venus.js';
import { Mars } from './../src/mars.js';
import { Jupiter } from './../src/jupiter.js';

$(document).ready(function() {
  $("#age").submit(function(event) {
    event.preventDefault();
    const age = $("input#inputted-age").val();
    $("#earth-age").text(age);
  
    $("button#mercury-button").click(function() {
      $("#place-holder").fadeOut(1500);
      $("#venus").fadeOut(1500);
      $("#mars").fadeOut(1500);
      $("#jupiter").fadeOut(1500);

      let mercury = new Mercury(age);
      mercury.calcAge();
      mercury.calcRemaining();

      setTimeout(function() {
        $("#mercury-age").text(mercury.relativeAge);
        $("#mercury-remaining").text(mercury.yearsRemaining);
        $("#mercury").fadeIn(1500);
      },1500);
    });

    $("button#venus-button").click(function() {
      $("#place-holder").fadeOut(1500);
      $("#mercury").fadeOut(1500);
      $("#mars").fadeOut(1500);
      $("#jupiter").fadeOut(1500);

      let venus = new Venus(age);
      venus.calcAge();
      venus.calcRemaining();

      setTimeout(function() {
        $("#place-holder").fadeOut(1500);
        $("#venus-age").text(venus.relativeAge);
        $("#venus-remaining").text(venus.yearsRemaining);
        $("#venus").fadeIn(1500);
      },1500);
    });

    $("button#mars-button").click(function() {
      $("#place-holder").fadeOut(1500);
      $("#mercury").fadeOut(1500);
      $("#venus").fadeOut(1500);
      $("#jupiter").fadeOut(1500);

      let mars = new Mars(age);
      mars.calcAge();
      mars.calcRemaining();

      setTimeout(function() {
        $("#mars-age").text(mars.relativeAge);
        $("#mars-remaining").text(mars.yearsRemaining);
        $("#mars").fadeIn(1500);
      },1500);
    });

    $("button#jupiter-button").click(function() {
      $("#place-holder").fadeOut(1500);
      $("#mercury").fadeOut(1500);
      $("#venus").fadeOut(1500);
      $("#mars").fadeOut(1500);

      let jupiter = new Jupiter(age);
      jupiter.calcAge();
      jupiter.calcRemaining();

      setTimeout(function() {
        $("#jupiter-age").text(jupiter.relativeAge);
        $("#jupiter-remaining").text(jupiter.yearsRemaining);
        $("#jupiter").fadeIn(1500);
      },1500);
    });
  });
});