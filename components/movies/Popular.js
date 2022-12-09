import MovieCard from "./MovieCard";

const Popular = ({ movies }) => {
    return (
        <div className="bg-gray-50 container max-w-7xl mx-auto pb-10 px-4 rounded-lg">
            <h1 className="text-2xl text-black font-bold mt-8 mb-5">{"What's Popular"}</h1>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
                {movies?.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    );
}

export default Popular;