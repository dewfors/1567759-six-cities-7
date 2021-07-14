import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchLogin} from '../../store/api-actions';

function LoginForm(props) {

  const {sendLoginData} = props;

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendLoginData({
      email: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };


  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            ref={loginRef}
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            ref={passwordRef}
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required=""
          />
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    </section>
  );
}

LoginForm.propTypes = {
  sendLoginData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus,
});

const mapDispatchToProps = (dispatch) => ({
  sendLoginData(value) {
    dispatch(fetchLogin(value));
  },
});

export {LoginForm};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
