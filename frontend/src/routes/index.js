import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import BookAp from '../pages/BookAp'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Treatments from '../pages/Treatments'
import ContactUs from '../pages/ContactUs'



const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "about-us",
                element : <AboutUs/>
            },
            {
                path : "book-appoinment",
                element : <BookAp/>
            },
            {
                path : "signup",
                element : <SignUp/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "treatments",
                element : <Treatments/>
            },
            {
                path : "contact-us",
                element : <ContactUs/>
            }
            
        ]
    }
])


export default router