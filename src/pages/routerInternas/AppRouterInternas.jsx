import { Route, Routes } from "react-router-dom"
import { Admin } from "../dashboard/admin/Admin"
import { Navbar2 } from "../../components/navbar2/Navbar2"
import { PrivateRouter } from "../../routes/PrivateRouter"
import { User } from "../dashboard/users/User"

export const AppRouterInternas = () => {
    return (
        <>
            <Navbar2 />
            <Routes>
                <Route path="/dashboard/admin" element={<PrivateRouter>
                    <Admin />
                </PrivateRouter>} />
                <Route path="/dashboard/user" element={<PrivateRouter>
                    <User />
                </PrivateRouter>} />
            </Routes>
        </>
    )
}
