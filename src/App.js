import './assets/css/App.css';
import Header from './components/Header'
import { Fragment } from 'react';
import Main from './components/Main';
import Partner from './components/Partner';
import Table from './components/Table';
import Promo from './components/Promo';
import Book from './components/Book';

function App() {
  return (
    <Fragment>
      <Header/>

      <Main/>

      <Partner/>

      <Book/>

      <Table/>

      <Promo/>

    </Fragment>
  );
}

export default App;
