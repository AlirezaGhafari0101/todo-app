import React from 'react';
import PageTitle from './Components/PageTitle';
import AppHeader from './Components/AppHeader';

import styles from './styles/modules/app.module.scss'

function App() {
  return (
    <div className="container">
      <PageTitle>Todo App</PageTitle>
      <div className={styles.app__header}>
        <AppHeader/>
      </div>
    </div>
  );
}

export default App;