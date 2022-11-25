import {useState} from 'react'
import axios from 'axios'

const ForgetPassword = () => {
    const [fourth, setFourth] = useState ({
        email: ""
    })

    const handleChange = e => {
        setFourth ({...fourth, [e.target.name] : e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5050/api/auth/forget-password', {...fourth})
        .then((e) => {
            console.log(e.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div>
        <h1 className='text-center'>Forget Password</h1>
        <form className='col-8 mx-auto'>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' autoComplete='off' onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default ForgetPassword