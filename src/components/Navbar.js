import React, { useState } from 'react';
import Logo from "../assets/images/Logo/Logo.png";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    const [isSidebarOpen, setisSidebarOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="container flex">

                <div className="logo">
                    <a href="#">
                        <Link to="/">
                            <img src={Logo} width="150" height="150" />   
                        </Link>
                    </a>
                </div>

                <nav>
                    <ul className="links">
                        <li>
                            <a href="#">
                                <Link to="/roadmap">Roadmap</Link>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Link to="/faq">Faqs</Link>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Link to="/team">Team</Link>
                            </a>
                        </li>
                    </ul>

                    <ul className="socmed">
                        <li>
                            <a onClick={() => window.open ('https://opensea.io', "_newtab" ) } >
                                <img src="https://static.wixstatic.com/media/c0bac9_e437bf9237354df3869a53da587d2e8c~mv2.png/v1/fill/w_48,h_42,al_c,usm_0.66_1.00_0.01,enc_auto/af-OS-icon.png" />
                            </a>
                        </li>
                        <li>
                            <a onClick={() => window.open ('https://opensea.io', "_newtab" ) } >
                                <img src="https://static.wixstatic.com/media/c0bac9_9ec6ecb3e4e044379a136d73aac0f1a0~mv2.png/v1/fill/w_46,h_38,al_c,usm_0.66_1.00_0.01,enc_auto/af-twitter-icon-1.png" />
                            </a>
                        </li>
                        <li>
                            <a onClick={() => window.open ('https://opensea.io', "_newtab" ) } >
                                <img src="https://static.wixstatic.com/media/c0bac9_c1bc6a276f204774bf85a82fa2c1251c~mv2.png/v1/fill/w_48,h_36,al_c,usm_0.66_1.00_0.01,enc_auto/af-discord-icon.png" />
                            </a>
                        </li>
                    </ul>
                    
                    <ul>
                        <li>
                           <button className="openbtn" onClick={() => setisSidebarOpen(true)}>☰</button>

                            <div style={{width: isSidebarOpen? "100vw": 0}} className="sidebar">
								<a onClick={() => setisSidebarOpen(false)} className="closebtn">×</a>
								<a href="#"><Link to="/roadmap">Roadmap</Link></a>
								<a href="#"><Link to="/faq">Faqs</Link></a>
								<a href="#"><Link to="/team">The Team</Link></a>
						    </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
