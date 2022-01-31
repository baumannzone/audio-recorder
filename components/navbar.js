import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/audio', label: 'Audio' },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="container my-4">
      <ul className="flex justify-center">
        {navLinks.map(({ href, label }) => (
          <li key={href} className="mx-2">
            <Link href={href}>
              <a
                className={`text-sm leading-4 font-bold p-1 hover:text-fuchsia-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-300 ${
                  router.pathname === href
                    ? 'text-fuchsia-500'
                    : 'text-gray-700'
                }`}
              >
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
