import { UserProvider } from "./context/UserProvider"
import { Navigate, Route, Routes, Link } from "react-router-dom"
import { LoginPage } from "./LoginPage"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { NavBar } from "./NavBar"

export const MainApp = () => {
  return (
    <UserProvider>
      
      {/* <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/login'>Login</Link> */}

        <NavBar />
      <hr />

    
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="login" element={ <LoginPage /> } />
        <Route path="about" element={ <AboutPage /> } />

        <Route path="/*" element={ <Navigate to="/about" /> } />
        
      </Routes>


    </UserProvider>
  )
}
