import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Coeus from "../assets/images/Coeus.jpg";
import Helios from "../assets/images/Helios.png";
import Hyperion from "../assets/images/Hyperion.png";
import Uranus from "../assets/images/Uranus.png";
import Eos from "../assets/images/Eos.png";
import Selena from "../assets/images/Selena.png";

const Team = () => {
  return (
    <React.Fragment>
        <Navbar />
        <div className="team">
            <div className="container">
                <h3 className="title">The Team</h3>
                <p className="say">Say hello to the Cryptanian Kingdom team!</p>
                <div className="grid">
                    <div className="inner-card">
                        <div className="card">
                            <img src={Coeus} />
                            <div className="description">
                                <h3>Coeus</h3>
                                <p>Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner-card">
                        <div className="card">
                            <img src={Helios} />
                            <div className="description">
                                <h3>Helios</h3>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner-card">
                        <div className="card">
                            <img src={Hyperion} />
                            <div className="description">
                                <h3>Hyperion</h3>
                                <p>Community Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className="inner-card">
                        <div className="card">
                            <img src={Uranus} />
                            <div className="description">
                                <h3>Uranus</h3>
                                <p>Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner-card">
                        <div className="card">
                            <img src={Eos} />
                            <div className="description">
                                <h3>Eos</h3>
                                <p>Marketing Department</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner-card">
                        <div className="card">
                            <img src={Selena} />
                            <div className="description">
                                <h3>Selena</h3>
                                <p>Artist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </React.Fragment>
  )
}

export default Team;
