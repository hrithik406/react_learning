import { Children } from "react";
import Link from 'next/link'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="grid grid-cols-[1fr_5fr] w-full h-full min-h-screen">
    <div className="flex flex-col py-4 items-center gap-y-4 bg-red-500/20 ">
    <Link href="/dashboard/profile">profile</Link>
    <Link href="/dashboard/settings">settings</Link>
    </div>
    <div className="bg-blue-600/20">{children}</div>
    {/* {children} */}
    </section>
  )
}