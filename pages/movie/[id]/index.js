import { server } from '../../../config'
import axios from 'axios'
import Image from 'next/image';
import Link from 'next/link';
import Meta from '../../../components/diversos/Meta';

const Index = ({ movie }) => {
    // console.log("Index.movie", movie)

    return (
        <div className='container max-w-4xl mx-auto pt-6'>
            <Meta title={movie.title} />
            <div className="px-3 ">
                <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt="temp" width={1000} height={600} className="rounded-md" />
                <h1 className='font-bold text-xl my-2 text-center'>{movie.title}</h1>
                <p className='text-gray-600 text-sm mt-5'>{movie.overview}</p>
                <p className='text-gray-600 text-sm mt-5'>Genres: <span className='font-bold'>{movie.genres.map(genre => genre.name).join(', ')}</span></p>
                <p className='text-gray-600 text-sm mt-0'>Release Date: <span className='font-bold'>{movie.release_date}</span></p>
                <Link href='/' className='underline'><span className='text-gray-600 text-sm underline'>Voltar</span></Link>
            </div>
        </div>
    );
}

export default Index;

export async function getStaticProps(context) {
    const { id } = context.params

    // console.log("getStaticProps.id", id)
    let url = `${server}/movie/${id}?api_key=${process.env.MOVE_API}&language=pt-BR`
    // console.log("url", url)
    const res = await axios(url)
    let movie = res.data
    // console.log("getStaticProps.movie", movie)
    // const movie = res.data || []

    return {
        props: {
            movie
        }
    }
}

export async function getStaticPaths() {
    let url = `${server}/movie/popular?api_key=${process.env.MOVE_API}&language=pt-BR&page=1`
    // console.log("getStaticPaths.url", url)
    const res = await axios(url)
    // console.log("getStaticPaths.res",)
    const _data = res.data.results
    const ids = _data.map(movie => movie.id)

    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    // const paths = [{ params: { id: "436270" } }]

    return {
        paths,
        fallback: false,
    }
}


// https://api.themoviedb.org/3/movie?api_key=<<api_key>>&language=en-US