// style
import { FiInstagram } from "react-icons/fi";


import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <a
          href="https://www.instagram.com/umedjon_mamadaminov?igsh=MTIxbHlodmc2dWthMw=="
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram /> Mamadaminov_Umedjon
        </a>
      </div>
    </div>
  );
}

export default Footer;
