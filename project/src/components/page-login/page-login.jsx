import React from 'react';
import Header from '../page-home/header';
import LoginForm from './login-form';
import {Link} from 'react-router-dom';

function PageLogin() {
  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={`/#Amsterdam`}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PageLogin;
