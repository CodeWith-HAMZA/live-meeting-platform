import Link from "next/link";
import React from "react";

export default function Trash() {
  return (
    <div>
      <aside className="fixed inset-y-0 left-0 z-10 flex h-full w-64 flex-col border-r bg-background">
        <div className="flex h-16 shrink-0 items-center px-6">
          <Link
            href="#"
            className="flex items-center gap-2 font-bold"
            prefetch={false}
          >
            {/* <ChromeIcon className="h-6 w-6" /> */}
            <span className="sr-only">Google</span>
          </Link>
        </div>
        <nav className="flex flex-1 flex-col overflow-y-auto">
          <div className="space-y-1 px-4 py-2">
            <h3 className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              General
            </h3>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
              aria-current="page"
              prefetch={false}
            >
              {/* <HomeIcon className="h-5 w-5" /> */}
              Home
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              {/* <SearchIcon className="h-5 w-5" /> */}
              Search
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              {/* <MapIcon className="h-5 w-5" /> */}
              Maps
            </Link>
          </div>
          <div className="space-y-1 px-4 py-2">
            <h3 className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Gmail
            </h3>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              {/* <InboxIcon className="h-5 w-5" /> */}
              Inbox
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              {/* <SendIcon className="h-5 w-5" /> */}
              Sent
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              {/* <FileIcon className="h-5 w-5" /> */}
              Drafts
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              {/* <Trash2Icon className="h-5 w-5" /> */}
              Trash
            </Link>
          </div>
          <div className="space-y-1 px-4 py-2">
            <h3 className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Drive
            </h3>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              {/* <HardDriveIcon className="h-5 w-5" /> */}
              My Drive
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              {/* <UsersIcon className="h-5 w-5" /> */}
              Shared
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              {/* <ClockIcon className="h-5 w-5" /> */}
              Recent
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              {/* <StarIcon className="h-5 w-5" /> */}
              Starred
            </Link>
          </div>
          <div className="space-y-1 px-4 py-2">
            <h3 className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Calendar
            </h3>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              {/* <CalendarIcon className="h-5 w-5" /> */}
              Calendar
            </Link>
          </div>
        </nav>
      </aside>
    </div>
  );
}
