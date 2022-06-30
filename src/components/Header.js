import '../styles/Header.css';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="title">
          {/* eslint-disable-next-line*/}
          <h1><a href="">Vitae</a></h1>
          <div>Resume builder</div>
        </div>
        <a href="https://github.com/danxschz" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
      </header>
    )
  }
}

export default Header;
