import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { addUser } from './UserSlice';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const users = useSelector(state=>state.users )
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlesubmit = (e) =>{
        e.preventDefault()
        if(name!=='' && email!==''){
          dispatch(addUser({id: users[users.length - 1 ].id + 1 ,name,email}))
          navigate("/")
        }
        else{
          console.log("Please enter name/email")
        }
          
        
       
    }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection:'column' }}>
        <h3>Add New User</h3>
      <form style={{ width: '300px' }} onSubmit={handlesubmit}>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            name='name'
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)
            }
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input
            type="email"
            name='email'
            className="form-control"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
