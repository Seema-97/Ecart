import React, { Fragment, useEffect, useState } from "react";
import navLogo from "../images/logo-ecart.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { FIRESTORE } from "@/firebase.config";

const navMenus = [
  { pathName: "Home", routeLink: "/home" },

  { pathName: "Products", routeLink: "/products" },

  { pathName: "Contact", routeLink: "/contact" },
];

let LS = "FB2GoogleUser";
let localData = JSON.parse(localStorage.getItem(LS));

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[userData , setUserData] = useState({})
  let navigate = useNavigate();
  const handleRoute = (path) => {
    navigate(path);
  };

  useEffect(() => {
    if (localData) {
      setIsLoggedIn(true);
      setUserData(localData)
    }
  }, []);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleSignInOnClick = () => {
    onAuthStateChanged(auth, (res) => {
      if (res) {
        let data = {
          id: res.uid,
          userName: res.displayName,
          userEmail: res.email,
          userPhoto: res.photoURL,
        };
         setIsLoggedIn(true) ;
        localStorage.setItem(LS, JSON.stringify(data));
        setUserData(data)
      } else {
        signInWithPopup(auth, provider)
          .then((res) => {
            console.log(res);
            let data = {
              id: res.user.uid,
              userName: res.user.displayName,
              userEmail: res.user.email,
              userPhoto: res.user.photoURL,
            };
            addDoc(collection(FIRESTORE, "googleUsers"), {
              ...data,
            })
              .then(() => {
                alert("logged in");
              })
              .catch((err) => console.log(err));

            setIsLoggedIn(true);
            localStorage.setItem(LS, JSON.stringify(data));
            setUserData(data) ;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false) ;
    localStorage.removeItem(LS) ;
    userData({})
  };

  return (
    <>
      {/* Hello world */}
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand nav-logo" href="#">
            <img src={navLogo} alt="no image found" width={100} height={50} />
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
              {navMenus.map((item) => (
                <Fragment key={item.pathName}>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      role="button"
                      onClick={() => {
                        handleRoute(item.routeLink);
                      }}
                    >
                      {item.pathName}
                    </a>
                  </li>
                </Fragment>
              ))}
            </ul>

            <form className="d-flex nav-right-section">
              <div className="search-container d-flex">
                {/* <input
                  className="form-control me-2 search-input-tag"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />

                <button className="btn search-btn" type="submit">
                  <i className="bi bi-search search-icon"></i>
                </button> */}


                {isLoggedIn && (<>
                <img src={userData.userPhoto} width={50} height={50}/>
                <p>{userData.userName}</p>
                </>)}
              </div>

            
              {isLoggedIn ? (
                <>
                  <button
                    className="btn btn-success sign-in-btn"
                    onClick={handleLogout}
                  >
                    <span>
                      <i className="bi bi-person-fill"></i>
                    </span>
                    <span> Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-success sign-in-btn"
                    onClick={handleSignInOnClick}
                  >
                    <span>
                      <i className="bi bi-person-fill"></i>
                    </span>
                    <span>Sign in with Google</span>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
