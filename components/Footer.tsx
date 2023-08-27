import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constanst";
import Link from "next/link";
type ColumProps = {
  title: string;
  links: Array<string>;
};
const FooterColumn = ({ title, links }: ColumProps) => (
  <div className='footer_column'>
    <h4 className='font-semibold'>{title}</h4>
    <ul className='flex flex-col gap-2 font-normal'>
      {links.map((link, index) => (
        <li>
          <Link key={index} href='/'>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
          <Image
            src='./logo-purple.svg'
            width={115}
            height={38}
            alt='Clone-dribble'
          />
          <p className='text-start text-sm font-normal mt-5 max-w-xs'>
            Flexibble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
        </div>
        <div className='flex flex-wrap gap-12'>
          {footerLinks.map((link) => (
            <div className='flex-1 flex flex-col gap-4'>
              <FooterColumn title={link.title} links={link.links} />
            </div>
          ))}
        </div>
        <div className='flexBetween footer_copyright'>
          <p>@ 20233 Flexible. All rights reserved</p>
          <p className='text-gray'>
            <span className='text-black font-semibold'>10,214</span> projects
            submitted
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
