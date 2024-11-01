import Navbar from "../components/Navbar"

export default function BBQ(){
    return(
        <div>
            <Navbar />
            <h1 className="bg-gray-100 px-20 text-lg shadow font-bold"> Bar.B.Q ITEMS</h1>
        <ol className="bg-gray-500 px-20 text-white shadow border py-4">
            <li className="border-b border-gray-100"> Chiken Tikka</li>
            <li className="border-b border-gray-100">Beef Boti</li>
            <li className="border-b border-gray-100">Afghani Boti</li>
            <li className="border-b border-gray-100">Fish Tikka</li>
        </ol>

            <h1 className="bg-gray-100 px-20 text-lg shadow font-bold"> Drinks</h1>
            <ol className="bg-gray-500 px-20 text-white shadow border py-4">
                <li className="border-b border-gray-100">Next Cola 500ml</li>
                <li className="border-b border-gray-100">Mineral Water 500ml</li>
                <li className="border-b border-gray-100">Mineral Water 1ltr</li>
            </ol>
        </div>
    )
}