import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Root from './Root'
// import SlidetopMain from './Components/Home/SlidetopMain';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Root />} />
        <Route path='' element={<Home />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
      {/* <Home/> */}
    </>
  );
}

export default App;