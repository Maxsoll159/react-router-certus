import { Route, Routes, useLocation } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Login } from "../pages/auth/Login"
import { Admin } from "../pages/dashboard/admin/Admin"
import { PrivateRouter } from "./PrivateRouter"
import { Navbar } from "../components/navbar/Navbar"
import { AppRouterInternas } from "../pages/routerInternas/AppRouterInternas"


export const AppRouter = () => {


  const { pathname } = useLocation()

  return (

    <>
      {
        !pathname.includes("dashboard") && <Navbar />
      }


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        {/**RUTAS PRIVADAS */}
        <Route path="/*" element={<AppRouterInternas />} />
      </Routes>

    </>

  )
}
