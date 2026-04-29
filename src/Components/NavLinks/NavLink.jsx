import Link from 'next/link';
import React from 'react';

const NavLink = ({ href, children }) => {


// I have to use here use pathname. To show the active button. I will do it later. 

    return (
        <Link href={href}>
            {children}
        </Link>
    );
};

export default NavLink;