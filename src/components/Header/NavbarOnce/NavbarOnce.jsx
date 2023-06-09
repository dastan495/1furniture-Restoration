import React from "react";
import "./NavbarOnce.scss";
import navLogo from "../../../images/navLogo.png";
const NavbarOnce = () => {
    return (
        <div className="navbar">
            <div className="navbar_left_block">
                <img src={navLogo} alt="" />
            </div>
            <div className="navbar_right_block">
                <div className="navbar_navigate">
                    <div>ABOUT US</div>
                    <div>SERVICES </div>
                    <div>REVIEWS</div>
                    <div>BLOG</div>
                    <div>PROJECT PHOTOS</div>
                </div>
                <div className="right_block_buttons">
                    <button className="number_btn">+1-818-888-10-10</button>
                    <button className="book_btn">Book online now</button>
                </div>
            </div>
        </div>
    );
};

export default NavbarOnce;
