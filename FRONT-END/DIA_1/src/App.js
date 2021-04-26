import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayTasks = ['Alimentar o gato', 'Brincar com o gato', 'Passear com o gato', 'Afagar o gato'];

function App() {
  const saida = arrayTasks.map(task => Task(task));
  return (
    <ul>{saida}</ul>
  );
}

export default App;
