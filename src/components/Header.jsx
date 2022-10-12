import React from 'react';
// import School from '../assets/svg/school';
import { Link } from 'react-router-dom';
import School from '../assets/svg/school';
import UserCircle from '../assets/svg/userCircle';
import Logout from '../assets/svg/logout';

import DarkModeSwitch from './DarkModeSwitch';

function Header() {
  return (
    <section className="z-50 w-full bg-zinc-900 absolute py-4">
      <div className=" container mx-auto px-56 grid grid-cols-3 gap-0">
        <div className="col-span-1 flex justify-start items-center">
          <h1 className="text-white font-bold text-xl">
            <Link to="/">FUP</Link>
          </h1>
        </div>
        <div className="col-span-2 flex flex-row items-center justify-end gap-4">
          <DarkModeSwitch />
          <School className="fill-white" />
          <UserCircle className="fill-white" />
          <Logout className="fill-white" />
        </div>
      </div>
    </section>
  );
}

export default Header;
