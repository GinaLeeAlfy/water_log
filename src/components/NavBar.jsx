import Menu from "./Menu";

const NavBar = ({ userId }) => {
  return (
    <nav className="prose flex w-full flex-col items-center justify-center gap-2 px-1 py-1  sm:py-7">
      <Menu userId={userId} />
      <h1 className=" font-bold ">Water Log</h1>
    </nav>
  );
};

export default NavBar;
