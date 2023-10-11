/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  Random();
  document.querySelector(".buttonGen").addEventListener("click", Random);
};

function Random() {
  let valor = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let icono = ["♦", "♥", "♠", "♣"];
  let RandomValor = Math.floor(Math.random() * valor.length);
  let RandomIcono = Math.floor(Math.random() * icono.length);

  document.querySelector(".top-item").innerHTML = icono[RandomIcono];
  document.querySelector(".BottonItem").innerHTML = icono[RandomIcono];
  document.querySelector(".number").innerHTML = valor[RandomValor];
  document.querySelector(".container").style.color =
    RandomIcono <= 1 ? "red" : "black";
}
