import React from "react";
import "./Footer.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>End-to-End Projects</span>
            <span>Sitemap</span>
          </div>

          <div className="item">
            <h2>About</h2>
            <span>Careers</span>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Fiverr</span>
            <span>Buying on Fiverr</span>
            <span>Fiverr Guides</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community Hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Fiverr</h2>
            <span>More From Fiverr</span>
            <span>Fiverr Enterprise</span>
            <span>Fiverr Business</span>
            <span>Fiverr Pro</span>
            <span>Fiverr Logo Maker</span>
            <span>Get Inspired</span>
            <span>Fiverr Select</span>
            <span>ClearVoice</span>
            <span>Content Marketing</span>
            <span>Fiverr Workspace</span>
            <span>Invoice Software</span>
            <span>Learn</span>
            <span>Online Courses</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>fiverrr</h2>
            <span>© Fiverr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <div className="icon">
                <TwitterIcon />
              </div>
              <div className="icon">
                <FacebookIcon />
              </div>
              <div className="icon">
                <PinterestIcon />
              </div>
              <div className="icon">
                <LinkedInIcon />
              </div>
              <div className="icon">
                <InstagramIcon />
              </div>
            </div>
            <div className="link">
              <div className="icon">
                <LanguageIcon />
              </div>
              <span>English</span>
            </div>
            <div className="link">
              <div className="icon">
                <CurrencyRupeeOutlinedIcon />
              </div>
              <span>INR</span>
            </div>
            <div className="link">
              <div className="icon">
                <AccessibilityNewRoundedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
