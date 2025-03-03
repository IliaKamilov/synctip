import { Drawer } from "@/components/Drawer";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { Fragment } from "react";
import pkg from "package.json";

const HomeNavbar = () => {
  return (
    <Fragment>
      <nav className="rtl:flex-row-reverse flex justify-between fixed w-full">
        <Drawer label="תפריט ראשי">
          <ul>
            <ol className="px-4 font-bold text-sm">טיפים</ol>
            <li className="flex w-full min-w-[200px]">
              <Link href="/report/create" className="flex w-full items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width={56}
                  height={56}
                  className="p-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                דוח חדש
              </Link>
            </li>
          </ul>
          <div className="flex mt-10 p-2 text-gray-500 rtl:flex-row-reverse items-center justify-center text-xs font-light flex-row w-full gap-2">
            <Link href="https://synctip.com">synctip.com</Link>
            <span>&copy;</span>
            <Link
              className="border p-0.5 px-1 rounded-md bg-gray-500 text-gray-900 border-gray-700"
              href="https://github.com/iliakamilov/synctip"
            >
              v{pkg.version}
            </Link>
            <span>{new Date().getFullYear()}</span>
          </div>
        </Drawer>
        <ThemeToggle />
      </nav>
    </Fragment>
  );
};

const HomePage = () => {
  return (
    <>
      <HomeNavbar />
    </>
  );
};

export default HomePage;
