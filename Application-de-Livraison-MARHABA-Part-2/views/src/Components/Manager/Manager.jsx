import React from 'react'
import NavBar from '../NavBar/NavBar';

const Manager = () => {

    return (
        <div>
            <NavBar />
            <div className='m-5'>Bonjour {localStorage.getItem('name')}, votre role est: {localStorage.getItem('role')}</div>
            <div>
                Form add livreur
            </div>
        </div>
    )
}

export default Manager