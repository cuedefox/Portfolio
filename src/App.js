import './scss/import.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import MainContainer from './containers/MainContainer';
import Footer from './components/Footer';
import LanguageProvider from './contexts/Language';

function App() {
  return <>
    <LanguageProvider>
      <NavBar />
      <Header />
      <MainContainer />
      <Footer />
    </LanguageProvider>
    </>
}

export default App;
