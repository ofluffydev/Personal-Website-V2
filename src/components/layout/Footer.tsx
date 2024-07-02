import {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/footer.scss'
import {COMPANY_NAME, GITHUB} from "../../constants.tsx";

const Footer = () => {
    const [currentYear] = useState(new Date().getFullYear());

    return (<footer>
        <div className="container">
            <div className="footer-content">
                <div>
                    <h3>{COMPANY_NAME}</h3>
                    <p>Add super catchy tagline</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Other platforms</h4>
                    <div>
                        <a href={GITHUB} target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
            </div>
        </div>
    </footer>);
};

export default Footer;