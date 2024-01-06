import Link from 'next/link';
import '../app/globals.css';

const links = [
  { href: '/chat', label: 'chat' },
  { href: '/profile', label: 'profile' },
];

const NavLinks = () => {
  return (
    <ul className='links'>
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href} className='capitalize'>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;
