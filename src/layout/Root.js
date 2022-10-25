import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterPage from '../components/footer/Footer'

import Header from '../components/header/Header'

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <FooterPage />
        </div>
    )
}

export default Root
