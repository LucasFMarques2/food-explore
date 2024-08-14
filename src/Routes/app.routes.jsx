import {Routes, Route} from 'react-router-dom'
import { FoodDatails } from '../Pages/FoodDetails'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<FoodDatails/>}/>
        </Routes>
    )
}