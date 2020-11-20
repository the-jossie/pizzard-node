import React, { Fragment, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNumbers } from '../actions/getAction';
import { isAuthenticated, logout } from '../helpers/auth';

function Footer(props) {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    useEffect(() => {
        getNumbers();
    }, [])

    const handleLogout = () => {
        logout(() => {
            props.history.push('/');
        });
    }

    return (

        <footer className='bg-dark text-white'>
            <Container>
                <Row>
                    <Col md='6' lg='6' className="mb-5">
                        <h1><b>Pizzards</b></h1>
                        <p>Baked Italian pizzas at your fingertips.</p>
                        <>Give in to the <b><i className="nc">taste</i></b>!</>
                    </Col>
                    <Col md='6' lg='6'>
                        <h2><b>Links</b></h2>
                        <ul>
                            {!isAuthenticated() && (
                                <Fragment>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/signup">Signup</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                </Fragment>
                            )}
                            {isAuthenticated() && isAuthenticated().role === 0 && (
                                <Fragment>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/cart">Cart <span></span></Link></li>
                                </Fragment>
                            )}
                            {isAuthenticated() && isAuthenticated().role === 1 && (
                                <Fragment>
                                    <li><Link to="/admin/dashboard">Dashboard</Link></li>
                                </Fragment>
                            )}
                            {userInfo && isAuthenticated() && (
                                <Fragment>
                                    <li><Button onClick={handleLogout}>Logout</Button></li>
                                </Fragment>
                            )}
                        </ul>
                    </Col>
                </Row>
                <Row id="footer">
                    <Col md='6' sm='6' lg='6' className="mx-auto pt-5 text-center">
                        Copyright <Link to="/" className="nc">Pizzards</Link>&copy;<script>document.write(new Date().getFullYear());</script> All rights reserved.  Developed by <a href="https://jofedo.netlify.app" className="nc">Joseph Idowu</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;