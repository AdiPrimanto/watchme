import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-80 mx-auto">
        <Image
          src={"/undraw_home_cinema_l7yl.png"}
          width={200}
          height={200}
          layout="responsive"
          draggable={false}
          alt="Hero"
        />
        <h1 className="text-2xl text-gray-700 uppercase font-bold">
          Welcome to Watchme
        </h1>
        <p className="text-gray-500 text-sm">
          Produce Film feature, TELEVISION and GAME.
        </p>
        <Link href="/Contact">
          <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">
            CONTACT US
          </button>
        </Link>
      </div>
    </div>
  );
}
