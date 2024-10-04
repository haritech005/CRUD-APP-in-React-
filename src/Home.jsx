import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

const Home = () => {

    const users = useSelector(state => state.users)
    // console.log(users)

  return (
    <div className="container">
        <h2>Crud app with JSON Server</h2>
        <Link to='/create'><button className='btn btn-success my-3'>Create +</button></Link>
        <table className="table">

            <thead className="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
           {users.map((user,index) => (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                       <Link to={`/update/${user.id}`}> <button className='btn btn-sm btn-warning' >Edit</button> </Link>
                        <button className='btn btn-sm btn-danger ms-2'>Delete</button>
                    </td>
                </tr>
           ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home