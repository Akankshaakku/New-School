import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-new">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-brand">
              <h5>📚 CPPS</h5>
              <p className="footer-description">
                Children's Paradise Public School is an institution committed to providing quality education with modern facilities and experienced faculty.
              </p>
              <div className="social-links">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/faculty">Faculty</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Resources</h5>
            <ul className="footer-links">
              <li><a href="#curriculum"><i className="fas fa-book me-2"></i>Curriculum</a></li>
              <li><a href="#exams"><i className="fas fa-file-alt me-2"></i>Exams</a></li>
              <li><a href="#calendar"><i className="fas fa-calendar-alt me-2"></i>Academic Calendar</a></li>
              <li><Link to="/disclosure"><i className="fas fa-clipboard-list me-2"></i>Disclosure</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="footer-title">Contact Info</h6>
            <div className="footer-contact">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <p className="label">Address</p>
                  <p>Muzaffarpur, Bihar, India</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <p className="label">Phone</p>
                  <p>+91-XXXXXXXXXX</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <p className="label">Email</p>
                  <p>info@cppschool.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="footer-title">Newsletter</h6>
            <p className="footer-description">Subscribe to get updates about school events and news.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="row">
          <div className="col-md-6">
            <p className="footer-copyright">
              &copy; {currentYear} Children's Paradise Public School. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-end">
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span>•</span>
              <a href="#">Terms & Conditions</a>
              <span>•</span>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
