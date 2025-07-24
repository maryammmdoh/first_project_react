import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout' // Assuming Layout is the main layout component that includes Navbar and Footer
import Home from './components/Home'
import About from './components/About'
import Portofolio from './components/Portofolio'
import Contact from './components/Contact'


const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/portofolio", element: <Portofolio /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router}> </RouterProvider>
    </>
  );
}

export default App;
