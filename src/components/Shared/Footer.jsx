import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-slate-400 text-base-content">
        <div>
          <img className="h-32 w-28" src="https://i.ibb.co/SNqRKLg/unnamed-cleanup-1-removebg-preview.png" alt="" />
          <p className="font-bold mx-auto">Job Portal</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Development</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/about" className="link link-hover">About us</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
          <Link to="/blog" className="link link-hover">Blog</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-slate-400 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
