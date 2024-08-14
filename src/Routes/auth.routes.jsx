import {Routes, Route} from 'react-router-dom'

import { Login } from '../Pages/Login'
import { Logout } from '../Pages/Logout'

export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastra' element={<Logout/>}/>
        </Routes>
    )
}