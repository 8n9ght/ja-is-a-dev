import { useState } from "react";
import menuData from '../menuLinks.json'
import { Link } from "react-router-dom";


const Menu = ({setMenuActive}) => {
    
    const [activeClass, setActiveClass] = useState({});

    const handleMouseEnter = (id) => {
        setActiveClass(prevState => ({ ...prevState, [id]: 'active' }));
    };

    const handleMouseLeave = (id) => {
        setActiveClass(prevState => ({ ...prevState, [id]: 'disabled' }));
    };


    return (
        <div className="menu"> 
            <header className="menu__header">
                <p className="menu__header__title">Menu</p>
                <p className="menu__header__doppel">Menu</p>
            </header>
            <section className="menu__links">
                {menuData.menuItems.map((item) => {
                    return  <Link to={item.url} key={item.id} className="menu__links__item" onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={() => handleMouseLeave(item.id)} onClick={() => setMenuActive(false)}>
                    <img src={item.src} alt="link to page code" className="menu__links__item__img"></img>
                    <div className="menu__links__item__text">
                        <p className="menu__links__item__text--title">{item.title}</p>
                        <p className="menu__links__item__text--doppel">{item.title}</p>
                    </div>
                    <div className={`auroras ${activeClass[item.id] || 'disabled'}`}>
                        <div className='auroras__circle circle__menu--first' />
                        <div className='auroras__circle circle__menu--second' />
                        <div className='auroras__circle circle__menu--third' />
                    </div>
                </Link>
                } )}
               
            </section>
            <section className="menu__btns">
                <img src="./images/close.png" alt="close menu icon" className="menu__btns__img" onClick={() => setMenuActive(false)}/>
            </section>
        </div>
    )
}

export default Menu;