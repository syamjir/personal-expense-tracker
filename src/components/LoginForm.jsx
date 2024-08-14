import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useCloseForm } from "../../customHooks/useCloseForm";
function LoginForm({ onSetloginDetail, onSetIsOpenLoginForm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSetIsOpenLoginForm(false);
    onSetloginDetail({ userName: name, userEmail: email });
  }
  useCloseForm(onSetIsOpenLoginForm);
  return (
    <div className="form__modal">
      <div className="form__container">
        <h4 className={styles["form__title--blue"]}>Login</h4>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form__input--group">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              className="form__input"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form__input--group">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className={styles["form__btn--blue"]} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
