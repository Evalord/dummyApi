import logo from '../assets/logo.jpg'
import icon1 from '../assets/icon1.jpeg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const buttonHandler = () => {
        setShowMenu(!showMenu)
    }

    return (

        <section>
            <div className="section1">
                <img src={logo} className="logo" />
            </div>
            <div className='navHidden'>
                <button className='navIcon'><img src={icon1} onClick={buttonHandler} /> </button>
                {showMenu &&
                    <div className='navHiddenLink'>
                        <a href="#">home</a>
                        <a href="#">shopping Card</a>
                        <a href="#">my account</a>
                        <a href="#">item(s)</a>
                    </div>
                }
            </div>
            <div className="section2">
                < div className='nav'>
                    <a className="menuitem" onClick={() => navigate('/')} >Home</a>
                    <a className="menuitem" onClick={() => navigate(`/shoppingCard/${product.id}`)}>Shopping Cart</a>
                    <a className="menuitem" onClick={() => navigate('/profile')}>My Account</a>
                    <a className="menuitem">items(s)</a>
                </div>
            </div>
        </section>

    )

}
export default Navbar;