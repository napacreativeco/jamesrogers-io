import React from "react"
import './hamburger.css'
import './header.css'




export default function Hamburger() {

    function handleClick() {
      var burger = document.getElementById('burger');
      var burgerBox = document.getElementById('burger-container');
      var menu = document.getElementById('mobile-menu');


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

      <button id="burger" className="hamburger hamburger--spin" type="button" onClick={handleClick}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      )
}
