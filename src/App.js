import style from './App.module.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
