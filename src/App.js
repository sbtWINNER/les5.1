import Home from './Home'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.scss'


function App() {
  return (
    <div>
      <BrowserRouter>
<header>
  <Link to={'/'}>Home</Link>
  <Link to={'/page1'}>page1</Link>
  <Link to={'/page2'}>page2</Link>

</header>



        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/detail/:id' element={<Page3 />} />


        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
