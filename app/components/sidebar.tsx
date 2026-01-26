import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Instagram, Download } from 'lucide-react';

const SideBar = () => {
  return (
    <div className="m-10 rounded bg-blue-100 px-5">
      <h1 className="text-2xl font-extrabold">Prakash Anandakumar</h1>
      <h2>Software Engineer</h2>
      <div className="mx-auto my-0">
        <Image
          loading="eager"
          className="rounded-full py-5"
          src="/portfolio-image.jpg"
          alt="DP"
          width={330}
          height={330}
        />
      </div>
      <div>
        <ul>
          <li>
            Name: <span>Anandakumar Prakash</span>
          </li>
          <li>
            Position: <span>Software Engineer</span>
          </li>
          <li>
            Phone: <span>+94 76 700 4528</span>
          </li>
          <li>
            Email: <span>prakashakrakr@gmail.com </span>
          </li>
          <li>
            Location: <span>Colombo, Sri Lanka</span>
          </li>
        </ul>
      </div>
      <div className="mx-auto my-2 flex justify-center space-x-5">
        <Github className="cursor-pointer shadow-sm hover:bg-zinc-50 hover:text-zinc-600" />
        <Linkedin className="cursor-pointer shadow-sm hover:bg-blue-50 hover:text-blue-700" />
        <Instagram className="cursor-pointer shadow-sm hover:bg-red-50 hover:text-red-700" />
      </div>
      <button className="mx-auto my-2 flex items-center justify-center p-5 text-2xl">
        <Download />
        <p>Download</p>
      </button>
    </div>
  );
};

export default SideBar;
