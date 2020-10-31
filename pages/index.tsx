import Link from 'next/link';
import { Navbar } from '@components/core';

export default function Home() {
  return (
    <div className="bg-light min-h-screen font-body text-dark">
      <Navbar />
      <div className="text-title text-center mt-24">
        Tailwind <span className="text-primary">Components</span>
      </div>

      <div className="flex flex-row flex-wrap container mx-auto justify-center my-8">
        <Link href="/login">
          <div className="border border-dark w-full md:w-1/3 mt-8 mx-2 md:mx-0 rounded p-4 hover:border-primary transition-all ease-in-out duration-300 cursor-pointer">
            <div className="text-subheading">Login Page</div>
            <div className="text-body text-muted mt-2">
              Responsive login page
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
