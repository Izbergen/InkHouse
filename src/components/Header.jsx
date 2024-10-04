import MainIcon from './../assets/image/main-icon.svg'

import { useState } from 'react'
import CartIcon from "./CartIcon.jsx";
import ListIcon from "./ListIcon.jsx";
import MotionMenu from "./MotionMenu.jsx";
import PropTypes from "prop-types";
import { Link } from 'react-scroll';

function Header({hrefs}) {
    const [menuIsClicked , setMenuIsClicked] = useState(false);
    const [ menuItems ] = useState([
        { id: 1, name: 'Репродукции' ,href: hrefs[0]  },
        { id: 2, name: 'Новинки' ,href: hrefs[1] },
        { id: 3, name: 'О нас' ,href: hrefs[2] },
    ]);

    function menuRender(menuItems) {
        return menuItems.map(item => {
            return (
                <Link className={'item-hover basic-text text-lg text-primary-black'} to={item.href} key={item.id} smooth={true} duration={500}>
                    {item.name}
                </Link>
            )
        })
    }

    return (
        <header className={'bg-white sm:bg-pale-grey md:py-[38px]'}>
            <div className={'flex-col flex md:flex-row md:justify-between md:items-center md:container'}>
                <div className={'flex justify-center py-4 md:py-0 border-b-light-green sm:border-b container md:drop-container md:border-0'}>
                    <div className={'w-36'}>
                        <img src={MainIcon ? MainIcon : null} alt="logo" />
                    </div>
                </div>
                <nav className={'py-4 md:py-0 bg-pale-grey'}>
                    <div className={'flex justify-between container md:drop-container gap-0 md:gap-15'}>
                        <ListIcon setMenuIsClicked={(value) => setMenuIsClicked(value)} />
                        <div className={'hidden sm:flex justify-center items-center gap-15'}>
                            {menuRender(menuItems)}
                        </div>

                        <CartIcon cartElems={10} />
                    </div>

                    <MotionMenu setMenuIsClicked={(value) => setMenuIsClicked(value)} menuRender={() => menuRender(menuItems)} menuIsClicked={menuIsClicked} />
                </nav>
            </div>

        </header>
    );
}

Header.propTypes = {
    hrefs: PropTypes.array.isRequired,
}

export default Header;

