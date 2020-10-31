import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Input } from '@components/ui';

const login = () => {
  // ========== state values start ==========
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  // ========== state values end ==========

  const handleLogin = async () => {};

  return (
    <div className="bg-light border-primary border-l-8   text-dark ">
      <div className="w-full h-screen flex justify-center align-middle ">
        {/* ========== login section start ========== */}
        <div className="w-full md:w-1/2 flex justify-end  ">
          <div className=" flex flex-col  my-auto w-full xl:max-w-lg mx-10 xl:mx-32">
            <div className="w-full">
              <a href="/">
                <img src="deznit_logo.svg" alt="logo" />
              </a>
              <div className="text-heading text-dark">Signin</div>

              <div className="text-body text-error pt-8">{errorMessage}</div>
              <div className="text-sm py-2">Email</div>
              <Input
                type="text"
                placeholder="username@gmail.com"
                aria-label="Email"
                className="w-full"
                variant="outline"
                height="large"
                onChange={setEmail}
              />

              <div className="mt-5">
                <div className="text-sm py-2">Password</div>

                <Input
                  type="password"
                  placeholder="password"
                  aria-label="Password"
                  className="w-full"
                  variant="outline"
                  height="large"
                  onChange={setPassword}
                />
              </div>
              <div className="mt-6 flex flex-row justify-between">
                <div className="text-small text-secondary">
                  <Link href="/reset">Forgot Password? </Link>
                </div>
              </div>
              <Button
                onClick={handleLogin}
                disabled={loading}
                loading={loading}
                className="my-10 w-full"
              >
                Login
              </Button>
              <div className="test-small text-center text-muted">
                Or signin with
              </div>
              <div className="flex flex-row justify-center mt-8">
                <Button variant="outline" className="w-full mr-2 bg-white">
                  <img
                    src="icons/google.svg"
                    alt="google"
                    width="24px"
                    height="24px"
                    className="mr-2"
                  />
                  Google
                </Button>
                <Button variant="outline" className="w-full ml-2 ">
                  <img
                    src="icons/github.svg"
                    alt="google"
                    width="24px"
                    height="24px"
                    className="mr-2"
                  />
                  Github
                </Button>
              </div>

              <div className="test-small text-center text-muted mt-8">
                Don&apos;t have an account yet?
                <span className="text-secondary pl-1">
                  <Link href="/"> Register for free</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* ========== login section end ========== */}
        {/* ========== side2 start ========== */}

        <div className="w-1/2 hidden xl:flex">
          <img
            className="object-cover my-auto w-auto  h-md hidden md:block"
            src="illustrations/login_illustration.svg"
            alt="illustration"
          />
          {/* <Image
            height={920}
            width={550}
            className="object-cover my-auto w-auto py-32 h-xl hidden md:block"
            src="/illustrations/login_illustration.svg"
            alt="illustration"
          /> */}
        </div>

        {/* ========== side 2 end ========== */}
      </div>
    </div>
  );
};

export default login;
