import React from 'react'
import Mainnav from './Mainnav'
import Navmenu from './Navmenu'
import Toolbar from './Toolbar'

const Header = () => {
    return (
        <>
            <header className="fs-header">
                <Toolbar/>
                <Mainnav/>
                <Navmenu/>
            </header>
        </>
    )
}

export default Header