"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileNav() {
  const path = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Sheet open={open}>
        <SheetTrigger onClick={() => setOpen(true)}>
          {" "}
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* <SheetTitle>Select Menu Item</SheetTitle> */}

            <div className="flex flex-col my-12 gap-6">
              {sidebarLinks.map(({ route, label, imgURL }) => {
                const isActive = path === route;

                return (
                  <Link
                    onClick={() => setOpen(false)}
                    href={route}
                    key={label}
                    className={cn(
                      "flex gap-6 items-center justify-between p-5 rounded-lg justify-start",
                      {
                        "bg-primary ": isActive,
                        "hover:text-gray-300": !isActive,
                      }
                    )}
                  >
                    <Image
                      onClick={() => setOpen(false)}
                      src={imgURL}
                      width={18}
                      height={18}
                      alt={"url"}
                    />

                    <p className="font-semibold text-xl">{label}</p>
                  </Link>
                );
              })}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
