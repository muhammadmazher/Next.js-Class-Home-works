import Link from "next/link"
export default function About(){
    return (
        <div>
        <h1>You are in About</h1>
        <br />
        <Link href="/call">Call Us</Link>
        </div>
    );
}