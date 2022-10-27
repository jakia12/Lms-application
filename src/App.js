
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './layout/Root';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Courses from './pages/courses/Courses';
import Home from './pages/home/Home';
import Faq from './pages/faq/Faq';
import { loader as crsLoader } from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';
import PageDetails, { loader as paramsLoader } from './pages/pageDetails/PageDetails';
import Registration from './pages/registration/Registration';
import Login from './pages/login/Login';
import CheckOut from './pages/checkOut/CheckOut';



function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='/' element={<Home />} loader={crsLoader} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/singleCourse/:courseId' element={<PageDetails />} loader={paramsLoader} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/checkOut' element={<CheckOut />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  ));
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
