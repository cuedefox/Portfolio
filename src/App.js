import './scss/import.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import MainContainer from './containers/MainContainer';
import Footer from './components/Footer';
import LanguageProvider from './contexts/Language';
import WhatsappBut from './components/WhatsappBut';

function App() {
  return <>
    <LanguageProvider>
      <NavBar />
      <Header />
      <MainContainer />
      <Footer />
      <WhatsappBut />
    </LanguageProvider>
    </>
}

export default App;
