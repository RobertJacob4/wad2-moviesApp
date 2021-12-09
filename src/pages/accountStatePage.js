import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import SiteHeader from "../components/siteHeader"
import AccountState from "../components/userAuth/accountState"




const accountStatePage = (props) => {
  return (
    <>
    <SiteHeader/>
    <AccountState/>
      </>
  );
}

export default accountStatePage;