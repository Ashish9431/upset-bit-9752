import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>

<div className="icons">
      
<img style={{width:"200px" ,height:"50px"}} 
        src="https://www.kindpng.com/picc/m/151-1512792_firstpost-hd-png-download.png"/>

</div>

      <div className="xyz">

        <div style={{border: "1px solid lightgray",borderLeft:"none"}}>
          <div style={{marginLeft:"20px"}}>
          <h3 style={{fontWeight:"bold"}}>Firtspost</h3>
          <p>About Firstpost</p>
          <p>Press Release</p>
          <p>RSS</p>
          <p>Twitter</p>
          <p>Facebook</p>
          </div>
        </div>

        <div style={{border: "1px solid lightgray"}}>
          <div style={{marginLeft:"20px"}}>
          <h3 style={{fontWeight:"bold"}}>Section</h3>
          <p>Front Page</p>
          <p>Politics</p>
          <p>Sports</p>
          <p>India</p>
          <p>World</p>
          <p>Business</p>
          <p>Entertainment News</p>
          <p>Cricket</p>
          <p>Tech</p>
          <p>Health</p>
          <p>Photos</p>
          <p>Videos</p>
          </div>
        </div>

        <div style={{border: "1px solid lightgray"}}>
          <div style={{marginLeft:"20px"}}>
          <h3 style={{fontWeight:"bold"}}>Plus</h3>
          <p>Cricket Live Score</p>
          <p>New Delhi</p>
          <p>Mumbai</p>
          <p>Fp Exclusives</p>
          <p>Board Exam Results 2020</p>
          <p>Ipl 2020</p>
          </div>
        </div>

        <div style={{border: "1px solid lightgray",borderRight:"none"}}>
            <div style={{marginLeft:"20px"}}>
            <h3 style={{fontWeight:"bold"}}>Tools</h3>
            <p>Rss Feeds</p>
            <h3 style={{fontWeight:"bold"}}>Apps</h3>
            <p>Ios</p>
            <p>Android</p>
            </div>
        </div>
      </div>

      <div style={{margin:"auto",height:"40px",width:"73%",borderBottom:"1px solid lightgray"}}>
      <div style={{display:"flex",fontSize:"15px",fontWeight:"lighter",gap:"30px"}}>
              <div>
                <label>Network18 sites</label>
                <span>-</span>
              </div>
              <div><p>Moneycontrol</p></div>
              <div><p>News18</p></div>
              <div><p>CNBC TV18</p></div>
              <div><p>Overdrive</p></div>
              <div><p>Forbes India</p></div>
              <div><p>TopperLearning</p></div>   
        </div>
      </div>

      <div style={{textAlign:"center",fontWeight:"lighter"}}>
            <p>Copyright © 2022.Firstpost- All Rights Reserved</p>
        </div>

        <div style={{textAlign:"center"}} >
            <p>Terms of use | Privacy | Cookie Policy</p>
        </div>
    </>
  );
}

export default Footer;
