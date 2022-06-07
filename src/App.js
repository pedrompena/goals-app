import './App.css';
import Details from './components/add/Details';
import List from './components/list/List';
import Footer from './components/share/Footer';
import Header from './components/share/Header';
import Main from './components/share/Main';

function App() {
  return (
    <div className="App">
        <Header />
        <Main>
          {/* <List /> */}
          <Details />
        </Main>
        <Footer />
    </div>
  );
}

export default App;
