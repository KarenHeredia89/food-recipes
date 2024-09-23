'use client';

import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';

import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader() {

    return (
        <>
            <MainHeaderBackground />
            <header className='flex justify-between items-center px-8 py-4'>
                <Link 
                    href='/' 
                    className='flex-center gap-8 font-bold uppercase text-2xl'
                >
                    <Image 
                        className='w-20 h-20 object-contain drop-shadow-sm'
                        src={logoImg} 
                        alt='A plate with food on it'
                    />
                    NextLevel Food
                </Link>
                <nav>
                    <ul className='flex gap-6'>
                        <li>
                            <NavLink href='/meals'>
                                Browse Meals
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href='/community'>Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
        
    );
};