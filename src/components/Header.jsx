const Header = ({setMenuActive}) => {
    
    return (
        <section className="header">
            <img src="./images/menu--icon.png" alt="menu icon" className="header__img" onClick={() => setMenuActive(true)}></img>
        </section>
    )
}

export default Header;