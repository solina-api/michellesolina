import {Routes, Route} from 'react-router'
import Home from '../pages/Home'
import Reviews from '../pages/Reviews'
import MainLayout from '../layouts/MainLayout'
import Products from '../pages/Products'
import Benefits from '../pages/Benefits'



function Router() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/"element={<Home />} />
                <Route path="/products"element={<Products/>} />
                <Route path="/reviews"element={<Reviews />} />
                <Route path="/benefits"element={<Benefits />} />
            </Route>
        </Routes>
    )
}

export default Router

