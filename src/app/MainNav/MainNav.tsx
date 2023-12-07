import Link from 'next/link';
import React from 'react'

const MainNav = () => {
    return (
        <div className="flex flex-col self-center justify-self-end gap-8">
            <Link href='/'>
                Home
            </Link>
            <Link href='/blog'>
                Blog
            </Link>
            <span>
                Projects
            </span>
            <span>
                Contact
            </span>
        </div>
    );
};

export default MainNav;