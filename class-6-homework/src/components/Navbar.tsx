import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
          <div className="bg-slate-800 text-white flex justify-between px-60 py-1">
            <div>
              <a href="">Download app via sms</a>
            </div>
            <ul className="flex space-x-4 py-1">
              <li><Link href="/">Sign In</Link></li>
              <li><Link href="/">Sign Up</Link></li>
            </ul>
          </div>
      <nav className="bg-slate-800 text-white h-13 py-1 px-40 flex">

        <div className="text-xl font-semibold flex px-8">
          <a href="/">
          <img
          src="/Pw.png"
          alt="Logo"
          className="w-38 h-12"
         />
         </a>
          
        </div>

        <div className="">
            <ul className="flex px items-center text-">
                <li className="flex px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">Used Cars</Link></li>
                <li className="px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/newcars">New Cars</Link></li>
                <li className="px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">Bikes</Link></li>
                <li className="px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">Auto Store</Link></li>
                <li className="px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">Videos</Link></li>
                <li className="px-6 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">Fourms</Link></li>
                <li className="px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">Blog</Link></li>
                <li className="px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">More</Link></li>
                <li className="space-x-4 bg-red-600 py-1 px-7 items-center hover:text-red-600 font-semibold hover:bg-white"><Link href="/">Post An Ad</Link></li>
            </ul>
        </div>
      </nav>
        
     
  
 
    </div>
  );