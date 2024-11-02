import Link from "next/link"
const Products = () => {
    return(
        <div className="pb-28">
            <h1 className="pb-2">I am Products Page</h1>
            <Link href="/about">About</Link>
        </div>
    )
}
export default Products