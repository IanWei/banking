import Sidebar from "@/components/Sidebar";
import Image from 'next/image';
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = { firstName: 'Ian', lastName: 'Doe', email: 'doe@doe.com' };

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn} />
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
                    <div>
                        <MobileNav user={loggedIn}>{loggedIn}</MobileNav>
                    </div>
                </div>
            {children}
            </div>
        </main>
    );
}
