import React from 'react'
import Client from '../home/Client'
import About from './About'
import Experience from './Experience'
import OurMission from './OurMission'

const index = () => {
    return (
        <div>
            <About />
            <OurMission/>
            <Experience/>
            <Client />
        </div>
    )
}

export default index
