import style from './App.module.css';
import Header from './Header';
import Footer from './Footer';
import Row from './Row';
import About from './About';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <div className={style.main}>
        <Row />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
