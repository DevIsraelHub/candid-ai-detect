"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Logo from "../Logo";
import TokenImage from "../../assets/token.png";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const Header = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleProfile = () => setProfileOpen((prev) => !prev);

  return (
    <header className="bg-black border-b border-white/30 text-white flex items-center justify-between p-4 shadow-lg">
      <div className="flex items-center">
        <Logo />
      </div>
      <div className="relative flex gap-x-4 md:gap-x-6">
        <Button variant="ghost" className="space-x-3 px-2 py-6 lg:py-7 lg:px-4 bg-white/20 rounded-full hover:bg-white/40 hover:text-white">
          <Image src={TokenImage} alt="Logo" width={20} height={20} /> <span className="font-bold">0.00</span>
          <div
            onClick={toggleProfile}
            className="bg-purple-400 p-[2px] rounded-full hover:bg-purple-600 flex items-center"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </Button>
        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
            <ul className="py-2" onClick={toggleProfile}>
              <li className="px-4 py-2 hover:bg-gray-700">Profile Settings</li>
              <li className="px-4 py-2 hover:bg-gray-700">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
