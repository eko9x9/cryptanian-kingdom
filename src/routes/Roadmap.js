import React from 'react';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

const Roadmap = () => {
  return (
    <React.Fragment>
        <Navbar />
            <div className="roadmap">
                <div className="inner">
                    <h2>WE TREAT ROADMAPS A LITTLE DIFFERENT...</h2>
                    <h1>Launch Phase</h1>
                    <div className="text-content">
                        <h3 className="title">14 APRIL 2022</h3>
                        <p className="s-title">Public Mint</p>
                        <p className="content">(1000 item price 2 matic. mint 2 cryptans get 1 cryptan for free.)</p>
                    </div>
                    <div className="text-content">
                        <p className="s-title">Public Mint (2)</p>
                        <p className="content">(1000 item price 3 matic. mint 2 cryptans get 1 cryptan for free.)</p>
                    </div>
                    <div className="text-content">
                        <p className="s-title">Public Sale (Opensea)</p>
                        <p className="content">(4000 item, unit price 0.002 $ETH)</p>
                    </div>
                    <div className="text-content">
                        <p className="s-title">Art Reveal</p>
                        <p className="content">(Art reveal 2 days after public sale)</p>
                    </div>

                    <h1>Growth Phase</h1>
                    <div className="text-content">
                        <p className="s-title">Giveaway Community</p>
                        <p className="content">(100 Cryptans will be given away for public and holders)</p>
                    </div>

                    <div className="text-content">
                        <p className="s-title">New Listing Marketplace</p>
                        <p className="content">(4 $ETH trade volume listing in secondary marketplace (NFTrade.com) to gain more owners)</p>
                    </div>

                    <h1>Expansion Phase</h1>
                    <div className="text-content">
                        <p className="s-title">New Token</p>
                        <p className="content">(Release $CK token)</p>
                    </div>
                    <div className="text-content">
                        <p className="s-title">Secret Phase</p>
                        <p className="content">(Unlock secret phase & new roadmap)</p>
                    </div>

                </div>
            </div>
        <Footer />
    </React.Fragment>
  )
}

export default Roadmap