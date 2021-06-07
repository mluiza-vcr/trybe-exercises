import React from "react";
import { Link } from 'react-router-dom';
import { login } from '../actions';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      senha: '',
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  render() {
    const { info } = this.props;
    const { email, senha } = this.state;
    return (
      <div>
        <label> Email
          <input value={email} onChange={ this.handleChange } name="email" type="email" />
        </label>
        <label> Senha
          <input value={senha} onChange={ this.handleChange } name="senha" type="password" />
        </label>
        <Link onClick={() => info({ email, senha })} to="/registered">Login</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  info: (value) => dispatch(login(value)),
})

export default connect(null, mapDispatchToProps)(Login);