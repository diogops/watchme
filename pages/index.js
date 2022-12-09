import Hero from '../components/Hero'
import { server } from '../config'
import axios from 'axios'
import Popular from '../components/movies/Popular'

export default function Home({ movies }) {
  console.log(movies)

  return (
    <div>
      <Hero />
      <Popular movies={movies?.results} />
    </div>
  )
}

export async function getStaticProps() {
  let url = `${server}/movie/popular?api_key=${process.env.MOVE_API}&language=pt-BR&page=1`
  // console.log("url", url)
  const res = await axios(url)
  const movies = res.data || []

  return {
    props: {
      movies
    }
  }
}
