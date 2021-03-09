import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { registerUSer } from "../actions";

function Register(props) {
  const dispatch = useDispatch();
  const [form, setForm] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(props.registerUSer(form));
    console.log("form:", form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header isLogin />
      <form onSubmit={handleSubmit}>
        <div>
          <p className="Login__title">Registrar</p>
          <div>
            <p>Email</p>
            <input
              type="text"
              id="lmail"
              className="Login__email"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="Login__fNameCont">
            <p className="Login__fNameText">FirstName</p>
            <input
              type="text"
              id="fName"
              className="Login__email"
              onChange={handleChange}
              name="first_name"
            />
          </div>
          <div className="Login__lNameCont">
            <p className="Login__lNameText">LastName</p>
            <input
              type="text"
              id="lName"
              className="Login__email"
              onChange={handleChange}
              name="last_name"
            />
          </div>
          <div className="Login__passCont">
            <p className="Login__passwordText">Password</p>
            <input
              type="password"
              id="lpass"
              className="Login__password"
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="Login__passCont">
            <p className="Login__passwordText">Password</p>
            <input
              type="password"
              id="lpass"
              className="Login__password"
              onChange={handleChange}
              name="password_confirmation"
            />
          </div>
          <div className="Login__lNumCont">
            <p className="Login__lNumberText">Number</p>
            <input
              type="number"
              id="lNumber"
              className="Login__password"
              onChange={handleChange}
              name="phone_number"
            />
          </div>
          <div className="Login__uNameCont">
            <p className="Login__uNameText">Username</p>
            <input
              type="text"
              id="userName"
              className="Login__email"
              onChange={handleChange}
              name="username"
            />
          </div>
          <div className="Login__buttons">
            <div>
              <button className="Login__btnCancelar">login</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { registerUSer })(Register);
