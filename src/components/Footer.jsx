import React from "react";
import "../styles/footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="d-flex gap-5 justify-content-center">
                    <div className="py-2 row text-center">
                        <a href="/" className="col-6 col-lg-2 text-white">Careers</a>
                        <a href="/" className="col-6 col-lg-2 text-white">Blog</a>
                        <a href="/" className="col-12 col-lg-4 text-white ">Teach on HOOMSCHOOL</a>
                        <a href="/" className="col-6 col-lg-2 text-white">Help & Support</a>
                        <a href="/" className="col-6 col-lg-2 text-white">Privacy policy</a>
                    </div>
                </div>
            </div>
            <div className="d-flex bg-dark justify-content-center py-3 gap-3">
                <p className="text-white">
                    Follow Us :
                </p>
                <span className="text-secondary"><FacebookIcon /></span>
                <span className="text-secondary"><InstagramIcon /></span>
                <span className="text-secondary"><TwitterIcon /></span>
            </div>
        </>
    );
};

export default Footer;
