'use client';

import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import {sidebarLinks} from "@/constants";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {

    const pathName = usePathname();

    return (
        <section className="sidbar">
            <nav className="flex flex-col gap-4">
                <Link
                    href="/"
                    className="mb-12 cursor-pointer items-center gap-2">
                    <Image
                        src="/icons/logo.svg"
                        alt="logo"
                        width={34}
                        height={34}
                        className="size-[24px] max-xl:size-14"
                    />
                    <h1 className="sidebar-logo"
                    >Horizon</h1>
                </Link>
                {sidebarLinks.map((item) => {
                    const isActive = pathName === item.route || pathName.startsWith(item.route)
                    return <Link className={cn('sidebar-link', {'bg-bank-gradient': isActive})} href={item.route} key={item.label}>
                        {item.label}
                    </Link>
                })}
            </nav>
        </section>
    );
};

export default Sidebar;