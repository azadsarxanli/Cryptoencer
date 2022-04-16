import './assets/css/App.css';
import Header from './components/Header'
import { Fragment } from 'react';
import Main from './components/Main';
import Partner from './components/Partner';

function App() {
  return (
    <Fragment>
      <Header/>

      <Main/>

      <Partner/>

    </Fragment>
  );
}

export default App;
