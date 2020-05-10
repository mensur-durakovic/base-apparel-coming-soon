import React, { useState } from "react";

import Hero from "./hero";

const MainSection = React.memo((props) => {
  const [emailValid, setEmailValid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [showError, setShowError] = useState(false);

  const clicked = (e) => {
    e.preventDefault();

    console.log("email", email);
    if (!email) {
      setEmailValid(false);
      setShowError(true);
      return;
    }

    const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(email).toLowerCase());

    console.log("isValid", isValid);
    setEmailValid(isValid);
    if (!isValid) {
      setShowError(true);
    }
  };

  const changed = (event) => {
    setShowError(false);
    setEmail(event.target.value);
    setEmailTouched(true);
  };

  return (
    <main>
      <Hero />
      <div className="wrapper">
        <div className="wrapper-logo-wrapper">
          <div className="wrapper-logo"></div>
        </div>

        <div className="wrapper-title-form">
          <div className="wrapper-title">
            <h1 className="wrapper-title1">We're</h1>
            <h1 className="wrapper-title2">coming</h1>
            <h1 className="wrapper-title2">soon</h1>
          </div>
          <div className="wrapper-subtitle">
            <p>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </div>
          <div className="wrapper-form">
            <form name="myForm" action="/" method="post">
              <input
                type="email"
                id="email"
                name="email"
                aria-labelledby="email"
                required
                placeholder="Email Address"
                onChange={changed}
              ></input>
              {((emailTouched && !emailValid && showError) ||
                (!emailValid && showError)) && (
                <>
                  <div className="error-message">
                    Please provide a valid email!
                  </div>
                  <div className="error-symbol"> </div>
                </>
              )}
              <button id="submitButton" name="submitButton" onClick={clicked} 
                aria-labelledby="submitButton">
                <span></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
});

export default MainSection;
