/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  function hacerdominiorandom(arrai1, arrai2, arrai3) {
    var combinaciones = '<ul class="list-group">';

    arrai1.map(item1 => {
      arrai2.map(item2 => {
        arrai3.map(item3 => {
          combinaciones += `
          <li class="list-group-item">${item1}${item2}${item3}.com</li>`;
        });
      });
    });
    return (combinaciones += "</ul>");
  }
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  document.querySelector("#dominio").innerHTML = `${hacerdominiorandom(
    pronoun,
    adj,
    noun
  )}`;
};
