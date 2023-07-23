import Image from "next/image";

export default function Home() {
  return (
    <div className="w-sceen">
      {/* header page */}
      <div className=" w-full h-screen dark:bg-black">
        <div className="flex justify-center items-center w-full h-full text-blue-400 text-8xl font-serif">
          <img src="Assets/tim.jpg" alt="" className=" w-10 h-10" />
        </div>
      </div>
    </div>
  );
}
