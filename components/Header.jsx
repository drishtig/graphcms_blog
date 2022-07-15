import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCategories } from '../services';
import duck from '../public/IMG_5670.PNG';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-0 mb-8 bg-black-50 w-screen space-x-4 flex">
      <div className="duck">
        <Image src={duck} />
      </div>
      <div className="border-bg-white w-full inline-block border-bg-white py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-5xl text-white"> TAMS | CSO BLOG</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-xl text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
