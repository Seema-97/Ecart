import React, { Fragment, useState } from 'react'
import navLogo from '../../images/logo-ecart.svg'
import './Header.css' 
import { useNavigate } from 'react-router-dom'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const navMenus = [
    {pathName : 'Home',
     routeLink : '/home'
    },

    {pathName : 'Products',
     routeLink : '/products'
    },

    {pathName : 'Contact',
     routeLink : '/contact'
    },
]

const Header = () => {
 
    let navigate = useNavigate();
    const handleRoute = (path) => {
      navigate(path);
    };

    const [loggenIn , setLoggedIn] = useState(false) ;
    const provider = new GoogleAuthProvider();
    const auth = getAuth();


    const handleSignInOnClick = () => {
    signInWithPopup(auth, provider).
      then(res => {
      console.log(res) ;
      setLoggedIn(true);
    }).catch(err => {
      console.log(err);
    })
    }


  return (

    <>
    {/* Hello world */}
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand nav-logo" href="#">
         <img src= {navLogo} alt="no image found" width={100} height={50}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-menu">
            {
                navMenus.map(item => (
                    <Fragment key = {item.pathName}>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" role='button' onClick={() => {handleRoute(item.routeLink)}}>
                        {item.pathName}
                        </a>
                      </li>
                    </Fragment>
                ))
            } 
          </ul>
            
          <form className="d-flex nav-right-section" >
             
            <div className="search-container d-flex">
            <input
              className="form-control me-2 search-input-tag"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            
            <button className="btn search-btn" type="submit">
            <i className="bi bi-search search-icon"></i>
            </button>
            </div>

            <button  className="btn btn-success sign-in-btn" onClick={handleSignInOnClick}><span><i className="bi bi-person-fill"></i></span><span>SignIn with Google</span></button>

          </form>
        </div>
      </div>
    </nav>
  </>
  
  )
}

export default Header