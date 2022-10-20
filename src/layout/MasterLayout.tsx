import React from 'react'
import AppFooter from '../Components/AppFooter'
import AppHeader from '../Components/AppHeader'
import AppSidebar from '../Components/AppSidebar'
import MainRoute from "../Pages/MainRoute"

const MasterLayout = () => {
    return (
        <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light" id='shrinked-custom'>
                <AppHeader />
                <div className="body flex-grow-1 px-3">
                    <MainRoute />
                </div>
                <AppFooter />
            </div>
        </div>
    )
}

export default MasterLayout