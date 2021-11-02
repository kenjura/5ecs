import logo from './logo.svg';
import './App.scss';
import Nav from './components/Nav';
import { useRoute } from "wouter";

function App() {
  const [ isCharacters ] = useRoute('/characters');
  const [ isSystem ] = useRoute('/system');

  return (
    <div className="App">
        
      <Nav />

      { isCharacters ? 'character page' : '' }
      { isSystem ? 'system page' : '' }
    </div>
  );
}

export default App;
