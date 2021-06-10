
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router'
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import PetDetail from './components/PetDetail';

function App() {
  return (
    <div className="App">
        <h1>Pet Shelter</h1>
      <Router>
        <Main path="/"/>
        <Create path="/pets/new"/>
        <Update path="/pets/:id/edit"/>
        <PetDetail path="/pets/:id"/>
      </Router>
    </div>
  );
}

export default App;
