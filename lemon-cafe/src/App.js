
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Pages/Main';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <div className="flex-container header">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
