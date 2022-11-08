import logo from '../logo.svg';
import '../App.css';
import { ImKey } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Link } from 'react-router-dom';

function User() {
    const [data, setData] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getData = async () => {
            try {
                const users = await axios.get('http://localhost:8081/users', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(users.data.data);
                
                return data;
            } catch (e) {
                console.error(e);
                if (e instanceof AxiosError) {
                    const cause = e.response?.data.msg || 'internal error';
                    const status = e.code;
                    return {
                        data: [],
                        msg: `cause : ${cause}(${status})`,
                    };
                }
            }
        };
        getData();
    }, []);

    console.log(data);
    console.log(typeof data);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    "Welcome to B-MNSN World"
                </a>
                <div className='mt-2'>
                    <Link to="/" class="fs-3 text-white dropshadow text-decoration">
                        <button type="button" class="btn btn-outline-light">
                            <ImKey className='me-2'/>
                            Access Token
                        </button>
                    </Link>
                    <Link to="/books" class="fs-3 text-white dropshadow text-decoration">
                        <button type="button" class="btn btn-outline-light ms-3">
                            <FaUser className='me-2'/>
                            Books
                        </button>
                    </Link>
                    <Link to="/users" class="fs-3 text-white dropshadow text-decoration">
                        <button type="button" class="btn btn-outline-light ms-3">
                            <FaBook className='me-2'/>
                            Users
                        </button>
                    </Link>

                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" className='text-white fs-5'>ID</th>
                            <th scope="col" className='text-white fs-5'>Username</th>
                            <th scope="col" className='text-white fs-5'>FirstName</th>
                            <th scope="col" className='text-white fs-5'>LastName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 ? (
                                data.map((user) => (
                                    <tr key={user.id}>
                                        <th scope="row" className='text-white fs-5'>{user.id}</th>
                                        <td className='text-white fs-6'>{user.username}</td>
                                        <td className='text-white fs-6'>{user.firstName}</td>
                                        <td className='text-white fs-6'>{user.lastName}</td>
                                    </tr>
                                ))): (
                                    <div class="text-white contani">ACCESS_TOKEN invalid</div>
                                )
                            }
                    </tbody>
                </table>
            </header>
        </div>
    );
}
export default User;