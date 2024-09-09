import { useState } from "react";

import Header from "./Header";
import Menu from "./Menu";

const Layout = ({children}) => {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className="wrapper no-scroll"> 
            <Header setMenuActive={setMenuActive} />
            <div className='wrapper__circle circle--first' />
            <div className='wrapper__circle circle--second' />
            <div className='wrapper__circle circle--third' />
            {menuActive && <Menu setMenuActive={setMenuActive} />}
            {children}
        </div>
    )

}

export default Layout;