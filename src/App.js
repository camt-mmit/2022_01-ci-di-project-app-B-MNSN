import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
// import AccessToken from './components/AccsessToken';
// import Users from './components/Books';
// import Books from './components/Users';
import Home from './components/Home';
import Books from './components/Books';
import Users from './components/User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
