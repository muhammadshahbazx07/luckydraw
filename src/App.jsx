import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import HeaderSpacer from './Components/Header/HeaderSpacer.jsx'
import GuestHome from './Modules/Home/GuestHome.jsx'
import UserHome from './Modules/Home/UserHome.jsx'
import Login from './Modules/Login&Signup/Login.jsx'
import Signup from './Modules/Login&Signup/Signup.jsx'
import MyAccount from './Modules/MyAccount/MyAccount.jsx'
import Footer from './Components/Footer/Footer.jsx'

import Button from './Components/Buttons/Button.jsx'
import MyColors from './Constants/MyColors.js'

import AcharImage from './assets/Images/achar.png'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Header
        rightContent={
          <>
            <Button
              onClick={() => {
                console.log('Login Button Clicked');
                navigate('/login');
              }}
              bgColor={MyColors.primary}
              // bgColor="linear-gradient(180deg, #FDDC5F 0%, #FDB833 100%)"
              textColor={MyColors.main}
              variant="solid"
              borderColor={MyColors.tertiary}

            >
              Login
            </Button>

            <Button
              onClick={() => {
                console.log('SignUp Button Clicked');
                navigate('/signup');
              }}
              // bgColor="#D6394A"
              textColor={MyColors.tertiary}
              variant="outline"
              borderColor={MyColors.tertiary}

            >
              Sign up
            </Button>
          </>
          // <div className="flex items-center gap-4">
          //   <p
          //     onClick={() => {navigate('/myaccount');}}
          //     className="text-white text-xl font-urbanist cursor-pointer hover:underline"
          //     style={{ fontFamily: 'Urbanist' }}
          //   >
          //     My Account
          //   </p>

          //   <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white ml-3">
          //     <img
          //       src={AcharImage}
          //       alt="Profile"
          //       className="w-full h-full object-cover"
          //     />
          //   </div>

          // </div>
        }
      />
      <HeaderSpacer />

      <Routes>
        <Route path='/' element={<GuestHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/userhome' element={<UserHome />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
