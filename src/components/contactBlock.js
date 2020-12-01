import React from "react"
import ContactForm from './contactForm'



export default function Hero() {

  return (
    <div className="contact" id="contact">
      <div className="row">
        <h2>Care to get in touch?</h2>
        <p>I am always accepting projects and would love to hear from you. Please allow a couple of days for a response.</p>

        <ContactForm />

      </div>
    </div>
  )
}
