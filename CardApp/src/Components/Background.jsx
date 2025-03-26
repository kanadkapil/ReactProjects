import React from 'react'
import Nav from './Nav'

function Background() {
    return (
        <>

            {/* need to change 23.10  */}
            <div className="fixed z-[2] w-full h-screen">

                {/* <Nav /> */}
                <h1 className='text-zinc-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] leading-none tracking-tighter'>
                    DashBoard.
                </h1>

            </div>

        </>
    )
}

export default Background