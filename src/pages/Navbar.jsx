import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{  width: "100%",
    height: "40px",
    border: "1px solid black",
    boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          fontSize: "15px",
          height: "25px",
          // border:"1px solid black",
          marginTop: "7px",
        }}
      >
        <Link to="/"></Link>
        <Link
          style={{
            textDecoration: "none",
            borderRight: "2px solid lightgray",
            width: "50px",
          }}
          to="/health"
        >
          Health
        </Link>
        <Link
          style={{
            textDecoration: "none",
            borderRight: "2px solid lightgray",
            width: "50px",
          }}
          to="/india"
        >
          India
        </Link>
        <Link
          style={{
            textDecoration: "none",
            borderRight: "2px solid lightgray",
            width: "55px",
          }}
          to="/world"
        >
          World
        </Link>
        <Link
          style={{
            textDecoration: "none",
            borderRight: "2px solid lightgray",
            width: "65px",
          }}
          to="/politics"
        >
          Politics
        </Link>
        <Link
          style={{
            textDecoration: "none",
            borderRight: "2px solid lightgray",
            width: "50px",
          }}
          to="/auto"
        >
          Auto
        </Link>
        <Link
          style={{
            textDecoration: "none",
            borderRight: "2px solid lightgray",
            width: "70px",
          }}
          to="/opinion"
        >
          Opinion
        </Link>
        <Link
          style={{
            textDecoration: "none",
            borderRight: "2px solid lightgray",
            width: "50px",
          }}
          to="/sports"
        >
          Sports
        </Link>
        <Link
          style={{
            textDecoration: "none",
            borderRight: "2px solid lightgray",
            width: "60px",
          }}
          to="/cricket"
        >
          Cricket
        </Link>
        <Link
          style={{
            textDecoration: "none",
            borderRight: "2px solid lightgray",
            width: "110px",
          }}
          to="/entertainment"
        >
          Entertainment
        </Link>
        <Link
          style={{
            textDecoration: "none",
            borderRight: "2px solid lightgray",
            width: "60px",
          }}
          to="/tech"
        >
          Tech
        </Link>

        <img src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/61202102d3810c9bd5b7f134_logo_6e51c82d-b55a-428d-9b27-dd9f58e5685e.png" />
        <a href="https://www.news18.com/netrasuraksha/">
        {/* https://www.nw18.com/images/Network18logo_K.png */}
        <img src=" https://www.nw18.com/images/Network18logo_K.png" alt="" />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
