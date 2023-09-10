import { useState } from "react";

export function MenuMobile() {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <div className="flex justify-center items-center cursor-pointer  text-black md:hidden animate-fade">
      <ion-icon
        name="menu-outline"
        style={{ fontSize: 25 }}
        onClick={() => setVisible(!visible)}
      ></ion-icon>
    </div>
  ) : (
    <div className={`${visible ? "hidden" : "block"} md:hidden`}>
      <nav className="w-[60vw] h-[100vh] fixed flex flex-col top-0 right-0 bg-white z-10 p-[55px]  animate-fade-left">
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => setVisible(!visible)}
        >
          <ion-icon style={{ fontSize: 25 }} name="close-outline"></ion-icon>
        </div>
        <ul>
          <li className="pt-3 pb-3 font-[500] text-[18px] tracking-wide cursor-pointer hover:text-[#5290b4]">
            Home
          </li>
          <li className="pt-3 pb-3 font-[500] text-[18px] tracking-wide cursor-pointer hover:text-[#5290b4]">
            About
          </li>
          <li className="pt-3 pb-3 font-[500] text-[18px] tracking-wide cursor-pointer hover:text-[#5290b4]">
            Skills
          </li>
          <li className="pt-3 pb-3 font-[500] text-[18px] tracking-wide cursor-pointer hover:text-[#5290b4]">
            Work
          </li>
          <li className="pt-3 pb-3 font-[500] text-[18px] tracking-wide cursor-pointer hover:text-[#5290b4]">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}
