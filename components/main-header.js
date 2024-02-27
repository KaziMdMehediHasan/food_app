import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader() {
    return (
        <header className={classes.header}>
            {/* logo */}
            <Link className={classes.logo} href="/">
                <img src={logoImg.src} alt="A plate with food on it" />
                NextLevel Food
            </Link>
            {/* navigation */}
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}