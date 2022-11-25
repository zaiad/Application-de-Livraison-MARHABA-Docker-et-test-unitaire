import {useState} from 'react'
import axios from 'axios'

const ResetPassword = () => {
  const [third, setThird] = useState({
    email: "",
    last_password: "",
    new_password: "",
  })

  const handleChange = e =>{
    setThird({...third, [e.target.name] : e.target.value})
  }

  const onSubmit = e =>{
    e.preventDefault()
    axios.post('http://localhost:5050/api/auth/reset-password', {...third})
    .then((e)=>{
      console.log(e.data)
      window.location = '/client/me'
    }).catch((error)=>{
      console.log(error.data)
    })
  }

  return (
    <div>
      <h1 className='text-center'>Reset Password</h1>
      <form className='col-8 mx-auto'>
      <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name='email' autoComplete='off' onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Last Password</label>
          <input type="password" className="form-control" name='last_password' autoComplete='off'  onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input type="password" className="form-control" name='new_password' autoComplete='off' onChange={handleChange}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" >Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default ResetPassword