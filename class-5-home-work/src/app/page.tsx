import Image from "next/image";

export default function Home() {
  return (
    <div>
  <header>
    <nav className="flex justify-between bg-blue-900 px-14 h-14 shadow-2xl items-center">
      <a href="/" className="rounded-lg bg-blue-400 text-white shadow-lg w-2/12 h-8 hover:bg-blue-500 text-center pt-1">
        <div >Brand Logo / Name</div>
      </a>
      
      <div>
        <ol className="flex w-8/12 items-center gap-2">
          <a href=""><li className="bg-blue-400 shadow-lg rounded-lg w-20 h-8 content-center text-center text-sm text-white hover:bg-blue-500">Home</li></a>
          <a href=""><li className="bg-blue-400 shadow-lg rounded-lg w-20 h-8 content-center text-center text-sm text-white hover:bg-blue-500">Apply</li></a>
          <a href=""><li className="bg-blue-400 shadow-lg rounded-lg w-20 h-8 content-center text-center text-sm text-white hover:bg-blue-500">Jobs</li></a>
          <a href=""><li className="bg-blue-400 shadow-lg rounded-lg w-20 h-8 content-center text-center text-sm text-white hover:bg-blue-500">Result</li></a>
        </ol>
      </div>
    </nav>
  </header>

  <div className="justify-center bg-slate-50 h-screen w-screen ">
    <div className="flex justify-center py-20 gap-6">
      <div className="bg-blue-400 shadow-xl rounded-xl w-5/12 min-h-80 hover:bg-blue-600"></div>
      <div className="bg-blue-400 shadow-xl rounded-xl w-5/12 min-h-80 hover:bg-blue-600"></div>
    </div>

    <div className="flex justify-center gap-6">
      <div className="bg-blue-400 shadow-xl rounded-xl w-3/12 min-h-60 hover:bg-blue-600"></div>
      <div className="bg-blue-400 shadow-xl rounded-xl w-3/12 min-h-60 hover:bg-blue-600"></div>
      <div className="bg-blue-400 shadow-xl rounded-xl w-3/12 min-h-60 hover:bg-blue-600"></div>
    </div>
  
      
  </div>
    
  <div>
   <footer className="bg-blue-950 h-10  text-white  text-sm text-center content-center font-semibold">Copyright 2024 - 2025<em> <a href="https://www.linkedin.com/in/muhammadmazher/" className="border-b-2 h hover:text-blue-700 hover:border-blue-700">Emas Web Solution </a></em>
   </footer>
  </div>

</div>
  );
}
