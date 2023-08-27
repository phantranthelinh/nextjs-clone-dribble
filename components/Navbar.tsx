import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constanst";
import AuthProviders from "./AuthProviders";
const Navbar = () => {
  let session = "";

  return (
    <nav>
      <div className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
          <Link href=''>
            <Image
              src='./logo.svg'
              width={115}
              height={43}
              alt='Clone-dribble'
            />
          </Link>
          <ul className='xl:flex hidden text-small gap-7'>
            {NavLinks.map((link) => {
              return (
                <Link key={link.key} href={link.href}>
                  {link.text}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className='flexCenter gap-4'>
          {session ? (
            <>
              UserPhoto
              <Link href='/create-project'>Share Work</Link>
            </>
          ) : (
            <AuthProviders />
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
