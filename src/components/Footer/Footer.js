import React from 'react';
import './Footer.css';


export const Footer = () => (
  <footer className="footer">
    <div className="content">
   

      <div className="footer__bottom-part">
        <p className="footer__copyright">
          © 2019 Finance Inc.
          </p>

        <div className="footer__misc">
          <div className="footer__bottom-links links">
            <a href="##" className="links__link">
              Privacy policy
          </a>
            <a href="##" className="links__link">
              Terms of  use
          </a>
            <a href="##" className="links__link">
              Pricing
          </a>
          </div>

          <div className="footer__social social">
            <a href="##" className="social__link">
              <img src="./images/tw.svg" alt="Twitter" />
            </a>
            <a href="##" className="social__link">
              <img src="./images/ig.svg" alt="Instagram" />
            </a>
            <a href="##" className="social__link">
              <img src="./images/fb.svg" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
