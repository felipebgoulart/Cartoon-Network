import React from 'react';
import { Navbar } from 'react-bootstrap';

import './styles.css';

import LogoCN from '../../assets/logo.png';

export default function Header() {
    return (
        <div className="content">
            <Navbar>
                <div className="titleTop col-4">
                    <div className="hour">14:00</div>
                    <div className="title">
                        <div className="float-right">
                            <i className="fas fa-plus fa-2x p-1 text-dark float-right bg-warning"></i>
                        </div>
                        <div className="col-11">
                            O incrível mundo de <br />Gumball
                        </div>
                    </div>
                </div>
                <div className="advertiseTop col-8">
                    <div id="advertisement" className="col-7">
                        <iframe title="VideoPub" width="100%" height="70px" src="https://www.youtube.com/embed/I2-8ZWTBUco?showinfo=0&controls=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                    <p id="pub" className="">Publicidade</p>
                </div>
            </Navbar>
            <div id="subNavbar" className="">
                <div className="logoType col-5">
                    <div className="brand position-absolute">
                        <img src={LogoCN} alt="Cartoon Network" width="50px"/>
                    </div>
                </div>
                <div className="search col-7">
                    <input type="text" 
                            placeholder="Procurar" 
                            className="border-0 mt-1 text-light text-center position-absolute"
                    />
                </div>
            </div>
        </div>
    )
}