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
      console.log('data válida')
    } else {
      alert('Data inválida!')
    }
  })
}

//validateDate();

function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index].value
    const dataUser = document.querySelector('.form-data')
    const div = document.createElement('div')
    div.className = 'div-curriculum';
    div.innerHTML = userInput;
    dataUser.appendChild(div);
  }
}

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textArea');
  const div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userImput = formElements[index];
    userImput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

const submitButton = document.querySelector('#submit-btn');
submitButton.addEventListener('click', renderCurriculum);

const clearButton = document.querySelector('#clear-btn');
clearButton.addEventListener('click', clearFields);

var picker = new Pikaday({
  field: document.getElementById('input-date'),
  format: 'DD/MM/YYYY'
});
