import {useState} from 'react'
import './Register.css';
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

const Register = () => {
  const [first, setFirst] = useState({
    name: "",
    email: "",
    password: "",
  })
  const handleChange = e => {
    setFirst({...first, [e.target.name] : e.target.value})
  }
const onSubmit = e => {
  e.preventDefault()
  axios.post('http://localhost:5050/api/auth/register',{...first})
    .then((e)=>{
      if(e.data.message) {
        toastr.success(e.data.message,{ positionClass: "toastr-bottom-left" })
        window.location = '/login'
      }
      if(e.data) {
        toastr.warning(e.data,{ positionClass: "toastr-bottom-left" })
      }
    }).catch(()=>{
      console.log('Error')
    })

}
  return (
    <div>
      <h1 className='text-center'>Register</h1>
      <form className='col-8 mx-auto'>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name='name' autoComplete='off' onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' autoComplete='off' onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name='password' autoComplete='off' onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
        <a href='/login' className='nav-link mt-3'>Login</a>
      </form>
  </div>
  )
}

export default Register