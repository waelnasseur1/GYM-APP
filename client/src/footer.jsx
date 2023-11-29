import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h2>Contact</h2>
        <address>
          RBK sousse<br />
          <a className="footer__btn" href="mailto:your-email@example.com">
            Email Us
          </a>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Media</h2>
          <ul className="nav__ul">
            <li>
              <a href="/">Online</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </li>
        <li class="nav__item nav__item--extra">
            <h2 class="nav__title">Technology</h2>
            
            <ul class="nav__ul nav__ul--extra">
              <li>
                <a href="">Hardware Design</a>
              </li>
              
              <li>
                <a href="#">Software Design</a>
              </li>
              
              
              <li>
                <a href="#">Artificial Intelligence</a>
              </li>
            </ul>
          </li>
        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>
          <ul className="nav__ul">
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>&copy; 2023 All rights reserved.</p>
        <div className="legal__links">
          <span>Made by <span className="heart">♥</span>wael</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
