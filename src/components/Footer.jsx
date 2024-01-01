import React from "react";

const date = new Date();
const currentYear = date.getFullYear;

function Footer() {
    return (
        <footer>
            <p>Copyright {currentYear}  Nathan Eneja</p>
        </footer>
    );
};

export default Footer;