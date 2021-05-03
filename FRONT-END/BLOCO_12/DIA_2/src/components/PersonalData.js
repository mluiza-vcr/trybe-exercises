import React from 'react';

class PersonalData extends React.Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      moradia: '',
    }
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
    if (event.target.value.startsWith(0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)) {
      event.target.value = '';
    }
  }

  render() {
    const brazilStates = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

    return (
      <fieldset>
        <label> Nome
          <input type="text" name="nome" maxLength="40" required onChange={this.handleChanges} value={this.state.nome.toUpperCase()} />
        </label>

        <label> E-mail
          <input type="email" name="email" maxLength="50" required onChange={this.handleChanges} value={this.state.email} />
        </label>

        <label> CPF
          <input type="text" name="cpf" maxLength="11" required onChange={this.handleChanges} value={this.state.cpf} />
        </label>

        <label> Endereço
          <input type="text" name="adress" maxLength="200" required onChange={this.handleChanges} value={this.state.adress.normalize("NFD").replace(/[^a-zA-Zs]/g, "")} />
        </label>

        <label> Cidade
          <input type="text" name="city" maxLength="28" required onChange={this.handleChanges} value={this.state.city} onBlur={this.handleBlur} />
        </label>

        <label> Estado
          <select name="state" value={this.state.state} onChange={this.handleChanges}>
            {brazilStates.map(element => {
              return <option value={element}> {element} </option>
            })};
          </select>
        </label>

        <label>
          <input type="radio" name="moradia" value="casa" onClick={this.handleClick} /> Casa
            <input type="radio" name="moradia" value="apartamento" onClick={this.handleClick} /> Apartamento
        </label>

      </fieldset>
    )
  }
}

export default PersonalData;


