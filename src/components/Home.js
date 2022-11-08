import logo from '../logo.svg';
import '../App.css';
import { ImKey } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const tokenSet = (e) => {
        setToken(e.target.value);
        localStorage.setItem('token', e.target.value || '');
    }

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
                    <div class="input-group">
                        <span class="input-group-text mt-3" id="basic-addon1"><ImKey/></span>
                        <input class="form-control mt-3" type="text" placeholder="Access Token" aria-label="Access Token" aria-describedby="basic-addon2"
                        onChange={tokenSet} value={token}></input>
                    </div>
                </div>
            </header>
        </div>
    );
}