import React from 'react';
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBBox className="shadow" style={{ backgroundColor: '#141417', color: 'white' }}>

      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-white">
              <img alt="logo" src="logo" width="30px" />
              <span className="ms-3 h5 font-weight-bold">Devwares</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              We are creating High Quality Resources and tools to Aid developers during the
              development of their projects
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Devwares
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <a href="/" style={{ color: 'white' }}>Resources</a><br/>
              <a href="/" style={{ color: 'white' }}>About Us</a><br/>
              <a href="/" style={{ color: 'white' }}>Contact</a><br/>
              <a href="/" style={{ color: 'white' }}>Blog</a>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <a href="/" style={{ color: 'white' }}>Support</a><br/>
              <a href="/" style={{ color: 'white' }}>Sign Up</a><br/>
              <a href="/" style={{ color: 'white' }}>Sign In</a>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <a href="/" style={{ color: 'white' }}>Windframe</a><br/>
              <a href="/" style={{ color: 'white' }}>Loop</a><br/>
              <a href="/" style={{ color: 'white' }}>Contrast</a>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Devwares, 2020. All rights reserved.</small>
      </CDBBox>
    </CDBBox>
  );
};
