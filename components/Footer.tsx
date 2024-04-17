import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo-white.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary py-4 text-primary-foreground">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="cursor-pointer">
            <Image src={logo} alt="Logo" className="h-8 w-auto" width={32} height={32} />
          </Link>
        </div>
        <div>
          <p className="mt-2 text-sm md:mt-0">&copy; {currentYear} CasaHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
