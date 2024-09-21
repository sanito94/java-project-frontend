import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddUserComponent = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const saveOrUpdateUser = (e) => {
        e.preventDefault();

        const user = { firstName, lastName, dateOfBirth, phoneNumber, email }

        if (id) {
            UserService.updateUser(id, user)
                .then((response) => {
                    console.log(response.data);
                    navigate("/");
                }).catch(error => {
                    console.log(error);
                })
        } else {
            UserService.createUser(user)
                .then((response) => {
                    console.log(response.data);
                    navigate("/");
                }).catch(error => {
                    console.log(error);
                })
        }
    }


    useEffect(() => {
        console.log(id);
        UserService.getUserById(id)
            .then((response) => {
                console.log(response);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setDateOfBirth(response.data.dateOfBirth);
                setPhoneNumber(response.data.phoneNumber);
                setEmail(response.data.email);
            })

    }, [])

    const title = () => {
        if (id) {
            return <h2 className='text-center'>Update User</h2>
        } else {
            return <h2 className='text-center'>Add User</h2>
        }
    }



    return (
        <div className='mt-5'>

            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            title()
                        }
                        <div className='card-body'>
                            <form >
                                <div className='form-group mb-2'>
                                    <label htmlFor="" className='form-label'>First Name:</label>
                                    <input
                                        type="text"
                                        placeholder='Enter first name'
                                        name='firstName'
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label htmlFor="" className='form-label'>Last Name:</label>
                                    <input
                                        type="text"
                                        placeholder='Enter last name'
                                        name='lastName'
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label htmlFor="" className='form-label'>Birthday:</label>
                                    <input
                                        type="date"
                                        placeholder='Enter date of birth'
                                        name='dateOfBirth'
                                        className='form-control'
                                        value={dateOfBirth}
                                        onChange={(e) => setDateOfBirth(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label htmlFor="" className='form-label'>Phonenumber:</label>
                                    <input
                                        type="text"
                                        placeholder='Enter phone number'
                                        name='phoneNumber'
                                        className='form-control'
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label htmlFor="" className='form-label'>Email:</label>
                                    <input
                                        type="text"
                                        placeholder='Enter email'
                                        name='email'
                                        className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <button type="submit" className='btn btn-success' onClick={(e) => saveOrUpdateUser(e)}>Save</button>
                                <Link to="/" className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddUserComponent