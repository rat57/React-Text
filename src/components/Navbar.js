import React from 'react'
import PropTypes from 'prop-types'
import {  NavLink } from 'react-router-dom'


function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/about">{props.aboutText}</NavLink>
                        </li>

                    </ul>

                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}


                    {/* 
                    <select className="form-select mb-3" aria-label=".form-select-lg example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select> */}



                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        <i className="fa-solid fa-gears"></i> Theme Color Setting
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                        <li className='dropdown-item' onClick={props.themeinfo}><button className="btn btn-info"></button></li>
                            <li className='dropdown-item' onClick={props.themeSuccess}><button className="btn btn-success"></button></li>
                            <li className='dropdown-item' onClick={props.themeDanger}><button className="btn btn-danger"></button></li>
                            <li className='dropdown-item' onClick={props.themelight}><button className="btn btn-light"></button></li>
                            <li className='dropdown-item' onClick={props.themeDark}><button className="btn btn-dark"></button></li>
                        </ul>
                    </div>

                    {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Dark Mode</label>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'TextUtils',
    aboutText: 'About us'
}

export default Navbar