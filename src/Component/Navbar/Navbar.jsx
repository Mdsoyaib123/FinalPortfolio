import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className=" text-white w-full sticky top-0 z-10">
      <div className="flex justify-between py-6  max-w-6xl mx-auto  ">
        <div className="text-white ">
          <h1>Portfolio</h1>
        </div>
        <div className="flex gap-10">
          <Link smooth to="/#about">
            {" "}
            About{" "}
          </Link>
          <Link smooth to="/#skills">
            {" "}
            Skills{" "}
          </Link>
          <Link smooth to="/#projects">
            {" "}
            Projects{" "}
          </Link>
          <Link smooth to="/#education">
            {" "}
            Education {" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
