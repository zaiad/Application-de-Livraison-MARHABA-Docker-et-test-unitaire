import React from 'react'
import NavBar from '../NavBar/NavBar';

const Livreur = () => {

    return (
        <div>
            <NavBar />
            <div className='m-5'>Bonjour {localStorage.getItem('name')}, votre role est: {localStorage.getItem('role')}</div>
        </div>
    )
}

export default Livreur