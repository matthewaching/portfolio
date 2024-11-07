import Link from 'next/link';
import React from 'react'

type PageRoute = {
    id: string,
    label: string,
};

const routes: PageRoute[] = [
    {
        id: '',
        label: 'Home',
    },
    {
        id: 'blog',
        label: 'Blog',
    },
    {
        id: 'projects',
        label: 'Projects',
    },
    {
        id: 'contact',
        label: 'Contact',
    },
];

const MainNav = () => {
    return (
        <div className="flex flex-col self-center justify-self-end gap-16">
            {routes.map(route => (
                <Link
                    key={route.id}
                    href={`/${route.id}`}
                    className="text-xl"
                >
                    {route.label}
                </Link>
            ))}
        </div>
    );
};

export default MainNav;