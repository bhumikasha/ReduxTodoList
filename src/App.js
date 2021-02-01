import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo/AddToDo';
import List from './components/List/list';

function App() {
  return (
    <div className="App">
      <AddToDo></AddToDo>
      <List></List>
    </div>
  );
}

export default App;
