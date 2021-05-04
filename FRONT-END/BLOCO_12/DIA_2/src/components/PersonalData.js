import React from 'react';

class PersonalData extends React.Component {
  render() {
    const brazilStates = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

    const { value: { nome, email, cpf, adress, city, state }, onChange, onClick, onBlur } = this.props;

    return (
      <fieldset>
        <label> Nome
          <input type="text" name="nome" maxLength="40" required onChange={onChange} value={nome.toUpperCase()} />
        </label>

        <label> E-mail
          <input type="email" name="email" maxLength="50" required onChange={onChange} value={email} />
        </label>

        <label> CPF
          <input type="text" name="cpf" maxLength="11" required onChange={onChange} value={cpf} />
        </label>

        <label> Endereço
          <input type="text" name="adress" maxLength="200" required onChange={onChange} value={adress.normalize('NFD').replace(/[\u0300-\u036f]/g, "")} />
        </label>

        <label> Cidade
          <input type="text" name="city" maxLength="28" required onChange={onChange} value={city} onBlur={onBlur} />
        </label>

        <label> Estado
          <select name="state" value={state} onChange={onChange}>
            {brazilStates.map(element => {
              return <option value={element}> {element} </option>
            })};
          </select>
        </label>

        <label>
          <input type="radio" name="moradia" value="casa" onClick={onClick} /> Casa
            <input type="radio" name="moradia" value="apartamento" onClick={onClick} /> Apartamento
        </label>

      </fieldset>
    )
  }
}

export default PersonalData;


