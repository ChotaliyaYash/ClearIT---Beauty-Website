import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Main = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Main Body */}
            <div className='container mx-auto'>Main</div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Main