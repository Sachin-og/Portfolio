import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import { Email } from '@mui/icons-material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Tooltip } from '@mui/material';
function  Footer() {
    function copyNumber(){

            /* Get the text field */
            var copyText = "+91 8307450007";
            navigator.clipboard.writeText(copyText);
            alert("Number copied to ClipBoard  : +91 8307450007")
      
    }
  return (
      

      <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
     
      <span className="mb-3 mb-md-0 text-body-secondary">© 2024 S. A. Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
     <Tooltip title="open Instagram"> <li className="ms-3"><Link className="text-body-secondary" target ="_blank" to= "https://www.instagram.com/sachin_.singhal"><InstagramIcon/></Link></li></Tooltip>
     <Tooltip title="open Linked In"> <li className="ms-3"><Link className="text-body-secondary" target ="_blank" to= "https://www.linkedin.com/in/sachin-aggarwal-3155b8276"><LinkedInIcon/></Link></li></Tooltip>
     <Tooltip title="open Primary gmail"> <li className="ms-3"><Link className="text-body-secondary" target ="_blank" to= "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLBtwcgMdJsdmcjmfWzkvBqkkMgBdhTtlSHCJpFwsrnjdVkvHvJmgMLqRvGZPmjcVDNRhN"><ContactMailIcon/></Link></li></Tooltip>
     <Tooltip title="copy Phone number "> <li className="ms-3"><Link className="text-body-secondary" target ="_blank" onClick = {copyNumber}><PhoneIcon/></Link></li></Tooltip>
     <Tooltip title="open Github Profile "> <li className="ms-3"><Link className="text-body-secondary" target ="_blank" to= "https://github.com/Sachin-og"><GitHubIcon/></Link></li></Tooltip>
     <Tooltip title="open Secondry gmail"> <li className="ms-3"><Link className="text-body-secondary" target ="_blank" to= "https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSGKnRCZWWxJgdtrDGSWBMQXCRvxmMstRQnqhLrRnbSkcSZRjTMKdkWDRNdKVgdTPWnxLBzp"><Email/></Link></li></Tooltip>
    </ul>
  </footer>
</div>
  )
}

export default Footer
