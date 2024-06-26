import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="md:max-w-screen-xl w-full px-2 md:mx-auto bg-transparent bg-gradient-to-tr mt-2 to-transparent rounded-xl border-2 border-white/5 from-zinc-300/5 via-gray-400/5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-lg backdrop-filter mb-6">
      <div className="ml-2 flex justify-between">
        <div className="text-md md:text-2xl text-gray-300 flex justify-center flex-col">
          100xDevs
        </div>
        <div className="flex flex-row">
            <Link href={"https://github.com/code100x"} className="m-2 flex items-center gap-3 rounded-xl bg-white/20 px-4 py-3 text-center text-white">
            Open source
            </Link>
            <Link href={"https://youtube.com/@harkirat1"} className="m-2 flex items-center gap-3 rounded-xl bg-white/20 px-4 py-3 text-center text-white">
            YouTube
            </Link>
        </div>
      </div>
    </div>
  );
};