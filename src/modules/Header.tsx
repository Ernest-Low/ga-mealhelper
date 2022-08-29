import { Outlet } from "react-router-dom"

const Header = () => {



    return (

        <div>
            <a href="/">Home</a>
            {/* Temporary Meal Display visible */}
            <a href="/mealdisplay">Meal</a>




<Outlet />
        </div>
    )
    
}

export default Header