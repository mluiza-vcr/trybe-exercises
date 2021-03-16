function createStateOptions() {
  const arrayStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás',
    'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
    'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']

  for (let index = 0; index < arrayStates.length; index += 1) {
    const select = document.querySelector('#input-state')
    const states = document.createElement('option')
    select.appendChild(states)
    states.innerHTML = arrayStates[index];
  }
}

createStateOptions();

function validateDate() {
  const date = document.querySelector('#input-date');

  date.addEventListener('focusout', function () {
    const value = date.value.split('/')
    const day = value[0];
    const month = value[1];
    const year = value[2];

    if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year > 0)) {
      console.log("data válida")
    } else {
      alert("Data inválida!")
    }
  })
}

validateDate();

