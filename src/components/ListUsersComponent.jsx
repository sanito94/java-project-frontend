import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService';
import { Link } from 'react-router-dom';

const ListUsersComponent = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = () => {
        UserService.getAllUsers()
            .then((response) => {
                setUsers(response.data)
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    const deleteUser = (userId) => {
        UserService.deleteUser(userId)
            .then((response => {
                getAllUsers();
            })).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className=' container'>
            <h2 className=" text-center"> List Users </h2>
            <Link to="/add-user" className='btn btn-primary mb-2'>Add User</Link>
            <table className='table table-boardered table-striped'>
                <thead>
                    <tr>
                        <th>  Id</th>
                        <th>  Firstname</th>
                        <th>  Lastname</th>
                        <th>  Email</th>
                        <th>  PhoneNumber</th>
                        <th>  Birthday</th>
                        <th>  Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(
                        user =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.dateOfBirth}</td>
                                <td>
                                    <Link className='btn btn-info' to={`/edit-user/${user.id}`}>Update</Link>
                                    <button className='btn btn-danger' onClick={() => deleteUser(user.id)} style={{ marginLeft: "10px" }}>Delete</button>
                                </td>
                            </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListUsersComponent