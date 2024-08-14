import {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/footer.scss'
import {COMPANY_NAME, GITHUB, NAV_LINKS} from "../../constants.tsx";

const Footer = () => {
    const [currentYear] = useState(new Date().getFullYear());

    return (<footer>
        <div className="container">
            <div className="footer-content">
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        {NAV_LINKS.map((link, index) => (<li key={index}>
                            <Link to={link.path}>{link.label}</Link>
                        </li>))}
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
