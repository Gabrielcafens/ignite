import { Post } from './Post';
import { Header } from './components/Header';

import './styles.css';

export function App() {
  return (
    <div>
      <Header/>
      
      <Post 
        author="Gabriel" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, porro ducimus consequuntur nulla ipsam distinctio unde deserunt doloribus? Quos similique eveniet ea ducimus consequatur explicabo facere voluptate quaerat, unde ullam." 
      />
      <Post 
        author="Teste1" 
        content="Teste2" 
      />
    </div>
  )
}
