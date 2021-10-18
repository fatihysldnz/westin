import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center">
      <div className="container">
        <div className="social-icon mb-3">
          <ul className="list-inline py-2 mb-0">
            <li className="list-inline-item">
              <a href="#">
                <img src="assets/img/facebook.svg" alt="/" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <img src="assets/img/twitter.svg" alt="/" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <img src="assets/img/github.svg" alt="/" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <img src="assets/img/linkedin.svg" alt="/" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <img src="assets/img/telegram.svg" alt="/" />
              </a>
            </li>
          </ul>
        </div>
        <p className="mb-0">
          Copyright © 2021. Template has been designed by
          <a className="base-color" href="#">
            "Yesildeniz"
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
