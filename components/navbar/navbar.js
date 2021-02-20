import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col w-44 h-screen p3 border-solid border-r-2 border-light-blue-500">
        <div className="w-full p-5">
          <h2 className="text-xl font-bold tracking-wide">TYT</h2>
        </div>
        <div className="flex flex-col mt-5">
          <Link href="/">
            <a className="group p-5 w-full">
              <span className="flex align-center text-xl tracking-wide p-3 group-hover:bg-gray-100 rounded-lg">
                Home
              </span>
            </a>
          </Link>
          <Link href="/record">
            <a className="group p-5 w-full">
              <span className="flex align-center text-xl w-full tracking-wide p-3 group-hover:bg-gray-100 rounded-lg">
                Record
              </span>
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};
