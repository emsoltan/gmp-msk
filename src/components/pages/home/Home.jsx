import React , {useEffect, useContext} from "react";
// import classes from "../../ui/UI.module.css";
import  "../../ui/UI.css"
import { Link, useNavigate } from "react-router-dom";
import Library from "../../pages/library/Library"
import About from "../../pages/about/About"
import Account from "../../pages/account/Account"
import MyContext from "../../../context/MyContext"
import  "./Home.css"
const Home = () => {
  const context = useContext(MyContext)
  // const navigate = useNavigate()
  // const {auth }= context

  return (
    <>
      <div className="section_view">
        <div className="home_view">
          <div className="text_box">
            <h1 className="heading_primary">
              <span className="heading_primary_sub">Welcome To</span>
              <span className="heading_primary_main">GMP-MSK Beats</span>
              <span className="heading_primary_sub2">your beats library</span>
            </h1>
            <Link to="/library" className="btn btn_black btn_animated">
              Pick your beats
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Library />
      {/* <Account /> */}
    </>
  );
};

export default Home;
