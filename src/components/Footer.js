import React, { useEffect } from 'react'

const Footer = () => {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://kit.fontawesome.com/c5dcf609bd.js";
        script.async = true;

        document.body.appendChild(script);
    }, [])

  return (
      <footer className="footer">
          <div className="socmed">
            <ul>
                <li>
                    <a href="#"><i className="fa-brands fa-discord"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </li>
            </ul>
          </div>

          <div className="copyright">
            <p>©2022 Cryptanian Kingdom. All Right Reserved.</p>
          </div>
      </footer>
  )
}

export default Footer
