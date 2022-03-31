import React from 'react';
import CygniKingdom from "../assets/images/kingdom/Cygni.png";
import DelphiniKingdom from "../assets/images/kingdom/Delphini.png";
import GlieseKingdom from "../assets/images/kingdom/Gliese.png";
import KeplerKingdom from "../assets/images/kingdom/Kepler.png";
import PegasiKingdom from "../assets/images/kingdom/Pegasi.png";

const Faq = () => {
  return (
    <React.Fragment>
        <div className="intro">
            <div className="grid-inner">
                <div className="text">
                    <div>
                        <h3>What's Cryptanian Kingdom?</h3>
                        <p>Cryptans were originally just an alien species that lived on the planet Kepler which later reproduced to become 6000 Cryptans with different body parts and attributes.</p>
                    </div>
                </div>
                <div className="image">
                    <img src="https://www.coolcatsnft.com/static/media/egg_and_items.6c9ec51a.png"/>
                </div>
            </div>
        </div>

        <div className="how-get">
            <div className="grid-inner">
                <div className="image">
                    <img src="https://www.coolcatsnft.com/static/media/pet-supplies.87ffcbfa.png" />
                </div>
                <div className="text">
                    <div>
                        <h3>How Do I Get NFTs?</h3>
                        <p>You can get nft through public mint on this website if supply is still available or you can buy public sale on available nft marketplaces such as opensea.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="type">

            <h2 className="t-c">The Four Kingdoms...For Now, At Least!</h2>
            <div className="type-inner">
                <div className="grid-inner-2">
                    <div className="img-inner">
                        <div className="planet-img">
                            <img src={GlieseKingdom} />
                        </div>
                        <h3 style={{color: "#FF8800"}} className="t-c">GLIESE KINGDOM</h3>
                    </div>

                    <div className="img-inner">
                        <div className="planet-img">
                            <img src={PegasiKingdom} />
                        </div>
                        <h3 style={{color: "#FFC500"}} className="t-c">PEGASI KINGDOM</h3>
                    </div>
                </div>

                <div className="grid-inner-3">
                    <div className="img-inner">
                        <div className="planet-img">
                            <img src={CygniKingdom} />
                        </div>
                        <h3 style={{color: "#006EFF"}} className="t-c">CYGNI KINGOM</h3>
                    </div>

                    <div className="img-inner">
                        <div className="planet-img">
                            <img src={DelphiniKingdom} />
                        </div>
                        <h3 style={{color: "#38206C"}} className="t-c">DELPHINI KINGDOM</h3>
                    </div>

                    <div className="img-inner">
                        <div className="planet-img">
                            <img src={KeplerKingdom} />
                        </div>
                        <h3 style={{color: "#00E6CF"}} className="t-c">KEPLER KINGDOM</h3>
                    </div>

                </div>
            </div>
            
        </div>

    </React.Fragment>
  )
}

export default Faq
