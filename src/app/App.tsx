import React from 'react';
import { User } from '../features/post/ui/user';
import styles from './styles/global.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <h1>User Profile</h1>
      <User userId={1} />
    </div>
  );
}

export default App;
