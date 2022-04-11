import React from 'react'
import Mainnav from './Mainnav'
import Navmenu from './Navmenu'
import Toolbar from './Toolbar'

const Header = () => {
    return (
        <>
            <Toolbar/>
            <Mainnav/>
            <Navmenu/>
        </>
    )
}

export default Header