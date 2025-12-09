import React from 'react';
// import twiter from '../assets/twiter.png';
// import linkedin from '../assets/linkedin.png';
// import facbook from '../assets/facbook.png';
// import message from '../assets/message.png';
import twiter from '../../assets/twiter.png';
import linkedin from '../../assets/linkedin.png';
import facbook from '../../assets/facbook.png';
import message from '../../assets/message.png';


const Footer = () => {
  return (
    <div className="bg-black  text-gray-400 py-16">
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <h1 className="text-[1.50rem] font-bold text-white">
              CS — Ticket System
            </h1>
            <p className="mt-5 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company */}
          <div>
            <h1 className="text-[1.25rem] font-semibold text-white">
              Company
            </h1>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">Contact Sales</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h1 className="text-[1.25rem] font-semibold text-white">
              Services
            </h1>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#">Products & Services</a>
              </li>
              <li>
                <a href="#">Customer Stories</a>
              </li>
              <li>
                <a href="#">Download Apps</a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h1 className="text-[1.25rem] font-semibold text-white">
              Information
            </h1>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Join Us</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h1 className="text-[1.25rem] font-semibold text-white">
              Social Links
            </h1>
            <ul className="mt-5 space-y-3 text-sm">
              <li className='flex items-center gap-2'>
                <img src={twiter} alt="" />
                <a href="#">@CS — Ticket System</a>
              </li>
              <li className='flex items-center gap-2'>
                <img src={linkedin} alt="" />
                <a href="#">@CS — Ticket System</a>
              </li>
              <li className='flex items-center gap-2'>
                <img src={facbook} alt="" />
                <a href="#">@CS — Ticket System</a>
              </li>
              <li className='flex items-center gap-2'>
                <img src={message} alt="" />
                <a href="mailto:support@cst.com">support@cst.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-5 text-white text-sm">
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
