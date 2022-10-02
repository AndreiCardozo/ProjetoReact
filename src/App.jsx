import { Header } from './components/Header';
import { Post } from './Post';

import styles from '../src/App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Andrei"
            content=" lorem ef "
          />
          <Post
            author="Fernando"
            content="Lorem uf"
          />
        </main>
        
      </div>


    </div>
  )
}

