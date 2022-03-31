import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Faq = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="faq container">
                <h1>Frequently Asked Questions</h1>
                <div className="text-content">
                    <h4 className="title">👽 What is cryptan?</h4>
                    <p className="content">Cryptans were originally just an alien species that lived on the planet Kepler which later reproduced to become 6000 Cryptans with different body parts and attributes.</p>
                </div>
                <div className="text-content">
                    <h4 className="title">👽 How many cryptan nft's will there be? </h4>
                    <p className="content">Cryptanian Kingdom will be comprised of 6,000 unique NFT’s. Ownership of these NFT’s will forever be provable on the Polygon blockchain. </p>
                </div>
                <div className="text-content">
                    <h4 className="title">👽 How to find cryptan rarities? </h4>
                    <p className="content">Rarity information will be available on raritysniffer.com after art revealed</p>
                </div>
                <div className="text-content">
                    <h4 className="title">👽 Can I trade my cryptan NFTs?</h4>
                    <p className="content">Yes. You can buy/sell your NFT on secondary marketplaces such as OpenSea and NFTrade (soon) </p>
                </div>
                <div className="text-content">
                    <h4 className="title">👽 Will there be another collection?</h4>
                    <p className="content">yes, this collection is connected with the history of the founding of the Cryptanian Kingdom (Secret phase)</p>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Faq