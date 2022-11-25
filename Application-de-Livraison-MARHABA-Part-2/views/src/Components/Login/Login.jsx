
import {useState} from 'react'
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

const Login = () => {
  
  const [second, setSecond] = useState ({
    email: "",
    password: ""
  })

 
  

  const handleChange = e =>{
    setSecond({...second, [e.target.name] : e.target.value})
  }
  const onSubmit = e =>{
    e.preventDefault()
    axios.post('http://localhost:5050/api/auth/login', {...second})
    .then((e)=>{
      if(e.data.message) {
        toastr.success(e.data.message,{ positionClass: "toastr-bottom-left" })
        localStorage.setItem('token', e.data.token)
        localStorage.setItem('name', e.data.name)
        localStorage.setItem('role', e.data.role)
        window.location = '/client/me'
      }
      else toastr.warning(e.data,{ positionClass: "toastr-bottom-left" })
    }).catch(()=>{
      console.log('Error')
    })
  }


  return (
    <div>
      <h1 className='text-center'>Login</h1>
      <form className='col-8 mx-auto'>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' autoComplete='off' onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name='password' autoComplete='off' onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
        <a href='/register' className='nav-link mt-3'>Creat account ?</a>
      </form>
    </div>
  )
}

export default Login
