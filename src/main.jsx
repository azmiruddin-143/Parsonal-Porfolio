import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './MainRoot/MainRoot';
import Home from './Pages/Home';
import ProjectsDetails from './Components/ProjectsDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <h1 className='text-red-900 text-5xl'>Error 404</h1>,
    children : [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/details/:id",
        element: <ProjectsDetails></ProjectsDetails>,
        
        loader: async ({ params }) => {
          // Fetch the projects.json file and find the project by ID
          const pev = await fetch("/projects.json");
          const data = await pev.json();
          const dataChek = data.find(d => d._id === params.id); // Match by _id from JSON
          if (!dataChek) {
            throw new Error("Project not found");
          }
          return dataChek; // Return the project data
        }
      
      }
    ]
    
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
