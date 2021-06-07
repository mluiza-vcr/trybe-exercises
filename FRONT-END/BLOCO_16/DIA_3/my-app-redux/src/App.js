import React from 'react'
import './App.css';
import PersonalData from './components/PersonalData';
import LastJob from './components/LastJob';
import ShowData from './components/ShowData';
import { connect } from 'react-redux';
import { addInfo, clearInfo } from './actions';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  adress: '',
  city: '',
  state: '',
  moradia: '',
  cv: '',
  job: '',
  description: '',
  submitted: false,
}

class App extends React.Component {
  constructor() {
    super()
    this.state = INITIAL_STATE;
  }

  handleChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (event) => {
    this.setState({
      moradia: event.target.value
    })
  }

  handleBlur = (event) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    numbers.forEach((number) => {
      if (event.target.value.startsWith(number)) {
        event.target.value = '';
      }
    })
  }

  resetForm = () => {
    this.setState(INITIAL_STATE);
    this.props.clear();
  };

  renderSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    this.props.add(this.state);
  }

  render() {
    const { infos } = this.props;
    const { nome, email, cpf, adress, city, state, cv, job, description, submitted } = this.state;

    return (
      <div>
        <h1>Cadastro de Currículo</h1>
        <form>
          <PersonalData
            onChange={this.handleChanges}
            onClick={this.handleClick}
            onBlur={this.handleBlur}
            value={{ nome, email, cpf, adress, city, state }} />

          <LastJob
            onChange={this.handleChanges}
            value={{ cv, job, description }} />
        </form>
        <button className="submit" onClick={this.renderSubmit}>Enviar</button>
        <button className="clear" onClick={this.resetForm}>Limpar</button>
        <div className="renderInfo">
          {submitted && <ShowData
            currentStates={infos} />}
        </div>
      </div >
    )
  }
}
const mapStateToProps = (state) => ({
  infos: state,
})

const mapDispatchToProps = (dispatch) => ({
  clear: () => dispatch(clearInfo()),
  add: (payload) => dispatch(addInfo(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);