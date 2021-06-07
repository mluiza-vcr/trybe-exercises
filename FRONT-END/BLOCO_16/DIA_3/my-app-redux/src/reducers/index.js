import { CLEAR_INFO, ADD_INFO } from '../actions/index';

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

export default function rootReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case CLEAR_INFO:
      return INITIAL_STATE;
    case ADD_INFO:
      return action.payload;
    default:
      return state;
  }
}