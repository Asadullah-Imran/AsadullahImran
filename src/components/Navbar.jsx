import { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Project",
      link: "#project",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 10 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "md:bg-white/60 text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            Asadullah <span className="text-cyan-600">Imran</span>
          </h4>
        </div>
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 hidden md:block px-7 py-2 font-medium bg-white rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`z-[999] text-3xl md:hidden m-5 `}>
          <ion-icon name="menu"></ion-icon>
        </div>
        <div className="text-gray-900 md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 right-0">
          <ul className="flex flex-col justify-centerh-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
