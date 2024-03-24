import React from 'react'

const HeroSection = () => {
    return (
        <div className="container-fluid">
            <style>
                {`
                    body {
                        font-family: 'Lato', sans-serif;
                    }
                    h1{
                        font-family: 'Lato', sans-serif;
                        font-weight: 900;
                    }
                `}
            </style>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <div className='mt-5'><h1>Featured Products</h1></div>
                <div><p>Explore the discover variety of Products</p></div>
            </div>
            /</div>
    )
}

export default HeroSection