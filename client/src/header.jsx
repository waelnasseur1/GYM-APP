import React from 'react';
import './Header.css'

function Header({handleView}) {
  return (
    <header id="myHeader">
      <div className="container">
        <div className="logo">
          <img src="" alt="" />
        </div>
        <ul className="list">
          <li>
            <a href="" onClick={()=>handleView('about')}>Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">products</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <div className="user">
          <button>
            <a href="">SignUp</a>
          </button>
          <button>
            <a href="">LogIn</a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
