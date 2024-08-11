import React from "react";
function Footer(){
    let currentYear = new Date().getFullYear();
    return <footer><p>
    Copyright © {currentYear} Mohit All right reserved.
</p></footer>
}
export default Footer;