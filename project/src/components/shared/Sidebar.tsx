'use client'
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sidebar() {
    const path = usePathname()

    return <section className="left-0 top-0 w-fit h-screen flex flex-col justify-between p-6 pt-28 text-white max-sm:hidden lg:w-[220px] bg-secondary">
        <div className="flex flex-col gap-6">
            {
                sidebarLinks.map(({ route, label, imgURL }) => {
                    const isActive = path === route

                    return <Link href={route} key={label} className={cn('flex gap-6 items-center justify-between p-5 rounded-lg justify-start', {
                        'bg-primary ': isActive,
                        'hover:text-gray-300': !isActive
                    })}>
                        <Image src={imgURL} width={18} height={18} alt={'url'} />

                        <p className="font-semibold text-md">
                            {label}
                        </p>
                    </Link>

                })
            }
        </div>
    </section>

}