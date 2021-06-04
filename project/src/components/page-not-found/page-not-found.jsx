import React from 'react';

function PageNotFound() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <h1>Page not found</h1>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="/">
                  return to main page
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default PageNotFound;
