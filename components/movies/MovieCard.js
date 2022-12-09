import Image from "next/image";
import Link from "next/link";
import FlowBite from "../cards/FlowBite";
import Horizontal from "../cards/Horizontal";

const Card = ({ movie }) => {
    return (
        // <FlowBite src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        // <Horizontal src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <Link href={`/movie/${movie.id}`}>
            <div className="bg-white shadow-sm rounded-md cursor-pointer mb-2 " >
                <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="rounded-t-md" alt="Temp" width={1000} height={300} />
                <div className="px-6 py-2">
                    <div className="text-xl mb-1 font-neue">{movie.title}</div>
                    <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
                </div>
            </div>
        </Link>
    );
}

export default Card;