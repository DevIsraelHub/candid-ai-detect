import Link from "next/link"
import React from 'react'
import LogoIcon from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-x-3 max-md:justify-center">
      <div className="flex border h-10 w-10 rounded-lg inlinee-flex items-center justify-center border-white/15">
        <LogoIcon className="w-8 h-8" />
      </div>
      <h2 className="font-bold text-white">Candid Ai</h2>
    </Link>
  )
}

export default Logo
