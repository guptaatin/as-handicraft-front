import React from 'react';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import {
  TwitterOutlined, FacebookOutlined, RightOutlined, InstagramOutlined
} from '@ant-design/icons';
import '../../App.css';

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <Row>
            <Col xs={24} sm={6} md={12} lg={6} xl={6}>
              <div className="footer-widget_title">
                <h2>Explore</h2>
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link to="#"><RightOutlined /> Home</Link>
                    </li>
                    <li>
                      <Link to="#"><RightOutlined /> Deal of the Day</Link>
                    </li>
                    <li>
                      <Link to="#"><RightOutlined /> Gallery</Link>
                    </li>
                    <li>
                      <Link to="#"><RightOutlined /> Testimonials</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={6} md={12} lg={6} xl={6}>
              <div className="footer-widget_title">
                <h2>Useful Links</h2>
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link to="#"><RightOutlined /> Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#"><RightOutlined /> Handicrafts</Link>
                    </li>
                    <li>
                      <Link to="#"><RightOutlined /> About Us</Link>
                    </li>
                    <li>
                      <Link to="#"><RightOutlined /> Videos</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={6} md={12} lg={6} xl={6}>
              <div className="footer-widget_title">
                <h2>Contact</h2>
                <div className="footer-widget_text">
                  <p className="contact-email">1010A 10th Floor-Levana Cyber Height</p>
                  <p className="contact-email">Gomti Nagar, Lucknow</p>
                  <p className="contact-email">info@krishirishi.com</p>
                  <ul>
                    <li>
                      <Link to="#">info.demo@gmail.com</Link>
                    </li>
                    <li>
                      <Link to="#">91+ 4498340853</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={6} md={12} lg={6} xl={6}>
              <div className="footer-widget-text">
                <h2>Connect</h2>
                <div className="footer-socal-icons">
                  <ul>
                    <li>
                      <a href="https://www.twitter.com/@Krishirishi1" target="_blank"><TwitterOutlined /></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/krishirishi1" target="_blank"><InstagramOutlined /></a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/Krishirishi0" target="_blank"><FacebookOutlined /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <div className="site-footer-bottom">
        <div className="container">
          <Row>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <div className="site-footer_bottom_copyright">
                <p>© Copyrights 2021 - 2022.All Rights Reserved. <Link to="#">ashandicraft.com</Link></p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <div className="site-footer_bottom_menu">
                <ul className="list-unstyled">
                  <li><Link to="/privacy_policy">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms of Use</Link></li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Footer;