import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/home.jsx'
import Layout from './Layout.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/users/user.jsx'
import Github from './components/githhub/github.jsx'


// const router = createBrowserRouter([{
//   path:'/',
//   element: <Layout/>,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element: <About/>
//     },
//     {
//       path:"contact-us",
//       element: <Contact></Contact>
//     }
//   ]
// }]) synatax 1

//synatax 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<Layout/>}>
    <Route path=''element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/contact-us'element={<Contact/>}/>
    <Route path='/user/:userid'element={<User/>}/>
    <Route path='/github'element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
     </React.StrictMode>,
)
