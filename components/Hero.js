import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="text-center mt-1 pb-10">
            <div className="w-60 mx-auto">
                <Image src={"/home_cinema.png"} alt="Imagem Teste" width={200} height={200} />
            </div>
            <h1 className="text-2xl text-gray-700 uppercase font-bold">Welcome to WatchMe</h1>
            <p className="text-gray-500 mb-5">Produce Filme feature, TELEVISION and GAME.</p>
            <Link href="/contact">
                <buttom className="bg-gray-700 text-white py-3 px-6 rounded text-sm">CONTACT US</buttom>
            </Link>
        </div>
    );
}

export default Hero;