// import Navbar from "./components/Navbar";

// export default function Home() {
//   return (
//     <div>
//       <h1>Hello this is my first app</h1>
//       <Navbar />
//     </div>
// );
// }

import About from "./about/page";
import Navbar from "./components/Navbar";

export default function Home(){
  return(
    <div>
      <h1 className="text-xl text-white font-semibold px-20 bg-violet-500 shadow-md">Welcom to My App!</h1>
    <Navbar />
    </div>
  )
}