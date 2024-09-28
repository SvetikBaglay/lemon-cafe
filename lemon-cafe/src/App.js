import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Pages/Main';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="flex-container header">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
