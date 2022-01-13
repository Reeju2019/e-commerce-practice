import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "../../../StateProvider";
import { auth } from "../../../firebase";

const Footer = () => {
  const [{ user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="full">
                <div className="logo_footer">
                  <a href="#">
                    <img width="210" src="static/images/logo.png" alt="#" />
                  </a>
                </div>
                <div className="information_f">
                  <p>
                    <strong>ADDRESS:</strong> 28 White tower, Street Name New
                    York City, USA
                  </p>
                  <p>
                    <strong>TELEPHONE:</strong> +91 987 654 3210
                  </p>
                  <p>
                    <strong>EMAIL:</strong> yourmain@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/">Services</Link>
                          </li>
                          <li>
                            <Link to="/testimonial">Testimonial</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Account</h3>
                        <ul>
                          <li>
                            <Link to="/">Account</Link>
                          </li>
                          <li>
                            <Link to="/checkout">Checkout</Link>
                          </li>
                          <li>
                            <Link
                              onClick={handleAuthentication}
                              to={!user && "./login"}
                            >
                              {user ? "Log Out" : "Log In"}
                            </Link>
                          </li>
                          <li>
                            <Link to={!user && "./login"}>Register</Link>
                          </li>
                          <li>
                            <Link to="/checkout">Shopping</Link>
                          </li>
                          <li>
                            <Link to="/">Widget</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="widget_menu">
                    <h3>Newsletter</h3>
                    <div className="information_f">
                      <p>
                        Subscribe by our newsletter and get update protidin.
                      </p>
                    </div>
                    <div className="form_sub">
                      <form>
                        <fieldset>
                          <div className="field">
                            <input
                              type="email"
                              placeholder="Enter Your Mail"
                              name="email"
                            />
                            <input type="submit" value="Subscribe" />
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="cpy_">
        <p>
          © 2021 All Rights Reserved By <a href="#">Reeju</a>
        </p>
      </div>
    </div>
  );
};
export default Footer;
