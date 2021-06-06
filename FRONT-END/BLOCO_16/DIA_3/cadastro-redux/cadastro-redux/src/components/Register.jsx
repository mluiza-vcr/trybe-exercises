import React from "react";
import { Link } from 'react-router-dom';
import { addRegister } from '../actions';
import { connect } from 'react-redux'; 

const INITIAL_STATE = {
  nome:'',
  idade:'',
  email:'',
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  validateRegister = () => {
    const { nome, idade, email } = this.state;
    this.props.addInfo({nome, idade, email});
    this.setState(INITIAL_STATE);
  }

  render() {
    const { nome, idade, email } = this.state;
    const { info } = this.props;
    if(!info.email) {
      return(
        <div>
          Login não efetuado!
        </div>
      )
    } 
    return (
      <div>
        <label>Nome
          <input value={nome} name="nome" onChange={this.handleChange} type="text" />
        </label>
        <label>Idade
          <input value={idade} name="idade" onChange={this.handleChange} type="text" />
        </label>
        <label>Email
          <input value={email} name="email" onChange={this.handleChange} type="email" />
        </label>
        <button onClick={this.validateRegister} type="submit">Cadastrar</button>
        <Link to="/registered">Clientes cadastrados</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  info: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addInfo: (value) => dispatch(addRegister(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);