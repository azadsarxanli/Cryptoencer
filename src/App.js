import './assets/css/App.css';
import Header from './components/Header'
import { Fragment } from 'react';
import Main from './components/Main';
import Partner from './components/Partner';
import Table from './components/Table';

function App() {
  return (
    <Fragment>
      <Header/>

      <Main/>

      <Partner/>

      <Table/>

    </Fragment>
  );
}

export default App;
