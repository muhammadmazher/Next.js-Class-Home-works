import Link from "next/link"
export default function Navbar (){
    return(
        <header className="bg-blue-700 text-white h-14 flex justify-center">
            <nav>
                <ul className="flex gap-10 py-4 content-center">
                    <li><Link href="/">Home</Link></li> 
                    <li><Link href="/category/crypto">Crypto</Link></li> 
                    <li><Link href="/products/product1">Laptop</Link></li>
                    <li><Link href="/students/studentName">Student</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}