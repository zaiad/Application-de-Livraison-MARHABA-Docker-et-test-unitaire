import React from 'react'
import NavBar from '../NavBar/NavBar';

const Client = () => {

    return (
        <div>
            <NavBar />
            <div className='m-5'>Bonjour {localStorage.getItem('name')}, votre role est: {localStorage.getItem('role')}</div>
        </div>
    )
}

export default Client