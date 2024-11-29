import { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true); 
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const discroll = scroll
    ? "bg-white text-black rounded-2xl py-6 mt-4 shadow-lg"
    : "py-4";

  return (
    <div
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all ${discroll}`}
    >
      <div className="container mx-auto px-4">
        <div className="navbar-box flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl font-bold">Mechatron</h1>
          </div>

          <ul className="flex gap-12">
            <li>
              <a href="#" className="font-medium  text-sky-500 hover:font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="font-medium text-sky-500 hover:font-bold">
                Coding
              </a>
            </li>
            <li>
              <a href="#" className="font-medium text-sky-500 hover:font-bold">
                Robotics
              </a>
            </li>
            <li>
              <a href="#" className="font-medium text-sky-500 hover:font-bold">
                Partnership
              </a>
            </li>
            <li>
              <a href="#" className="font-medium text-sky-500 hover:font-bold">
                Event
              </a>
            </li>
          </ul>

          <div className="contact bg-sky-500 text-white py-2 px-5 rounded-full hover:bg-sky-600">
            <a href="#">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;