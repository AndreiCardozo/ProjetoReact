import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Andrei"
        content=" lorem ef "
      />
      <Post
        author="Fernando"
        content="Lorem uf"
      />
    </div>
  )
}

