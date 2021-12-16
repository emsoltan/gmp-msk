import React from "react";
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import MyProvider from "../context/MyProvider";
import "../components/ui/UI.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../components/pages/home/Home";
import About from "../components/pages/about/About";
import Library from "../components/pages/library/Library";
import Album from "../components/pages/album/Album";
import Account from "../components/pages/account/Account";
import Cart from "../components/pages/cart/Cart";
import LoginForm from "../components/pages/account/loginform/LoginForm";
import LoginCheck from "../components/pages/account/loginform/LoginCheck";
const Routes = () => {
  return (
    <MyProvider>
      <Router className="containerbanner">
        <Header />
        <Switch>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About />} />
          <Route path="/library/*" element={<Library />}>
            <Route path="album" element={<Album />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/logincheck" element={<LoginCheck />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/album" element={<Album />} />
        </Switch>
        <Footer />
      </Router>
    </MyProvider>
  );
};

export default Routes;
