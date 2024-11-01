import Link from "next/link";

function Navbar(){
    return(
        <div className="bg-yellow-200 flex space-x-6 justify-center" >
        <Link href="/">Home</Link>
        <br />
        <Link href="/bbq">BBQ</Link>
        <br/>
        <Link href="/about">About</Link>
        <br />
        <Link href="/contact">Contact</Link>
        </div>
    );
}

export default Navbar