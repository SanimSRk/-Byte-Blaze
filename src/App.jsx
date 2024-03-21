import './App.css';
import Blogs from './assets/Pages/Blogs';
import Bookmark from './assets/Pages/Bookmark';

import Home from './assets/Pages/Home';

function App() {
  return (
    <>
      <div>
        <Home></Home>
      </div>
      <div>
        <Blogs></Blogs>
      </div>
      <div>
        <Bookmark></Bookmark>
      </div>
    </>
  );
}

export default App;
