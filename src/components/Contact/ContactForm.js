// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from 'react'
import styled from 'styled-components'

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media only screen and (max-width: 768px ) {
    grid-template-columns: 1fr;
  }
`;
const Titles = styled.label`
  font-family: var(--title);
  font-weight: 600;
`;

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xqkgdggw"
        method="POST"
        className="contact-form"
      >
        <TopRow>

          <div>
            <Titles htmlFor="name">Name</Titles>
            <input type="text" name="name"/>
          </div>
          
          <div>
            <Titles htmlFor="email">Email</Titles>
            <input type="email" name="email" />
          </div>
        </TopRow>

        <Titles htmlFor="message">Message</Titles>
        <textarea name="message"></textarea>

        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}