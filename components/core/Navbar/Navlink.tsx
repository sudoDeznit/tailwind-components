import Link from 'next/link';

type NavlinkProps = {
  children: any;
  href: string;
};

const Navlink = ({ children, href }: NavlinkProps) => {
  return (
    <Link href={href}>
      <a className="hover:bg-primaryLight hover:bg-opacity-25 py-3 px-5 rounded-md transition ease-in-out duration-150 text-body font-body">
        {children}
      </a>
    </Link>
  );
};

export default Navlink;
