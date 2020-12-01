import React from "react"
import './hamburger.css'
import './header.css'




export default function Hamburger() {

    function handleClick() {
      var burger = document.getElementById('burger');
      var burgerBox = document.getElementById('burger-container');
      var menu = document.getElementById('mobile-menu');
      var body = document.getElementById('page');


      if ( burger.classList.contains('is-active') ) {

        burger.classList.remove('is-active');
        menu.classList.remove('show-menu');
        menu.classList.add('hide-menu');
        setTimeout(function() { menu.style.display = "none"; }, 400);
        burgerBox.style.position = "relative";

      } else {
        
        burger.classList.add('is-active');
        menu.style.display = "flex";
        menu.classList.remove('hide-menu');
        menu.classList.add('show-menu');
        burgerBox.style.position = "absolute";

      }

    }

    return (

      <button id="burger" class="hamburger hamburger--spin" type="button" onClick={handleClick}>
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      )
}
