'use client';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation";

const items = [
  { title: "Home", href: "/" },
  { title: "Pricing", href: "/pricing" },
  { title: "Features", href: "/features" },
];


import { MobileNav, NavProps } from '@/components/MobileNav';

export const Nav = () => {
  return (
    <Link href="/" className="mr-4 flex items-center space-x-2">
  <Image src="/tumoh-logo.png" alt="Tumoh Logo" width={40} height={40} />
  <span className="font-bold text-lg">Tumoh</span>
</Link>
    <div>
      <NavigationMenu className="hidden md:inline-block">
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link href={item.link} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>,
      <MobileNav items={items} />
    </div>
  );
};
