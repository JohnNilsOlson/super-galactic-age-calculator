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
  
    $("button#mercury").click(function() {
      let mercury = new Mercury(age);
      mercury.calcAge();
      mercury.calcRemaining();
      $("#mercury-age").text(mercury.relativeAge);
      $("#mercury-remaining").text(mercury.yearsRemaining);
    });
  });
});