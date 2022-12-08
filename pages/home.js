import Link from "next/link";

const Home = () => {
    return (
        <>
            <div className='container'>
                <Link href="/">Início</Link>
            </div>
            <div className='container'>
                <h1 className='text-5xl text-center font-bold'>Teste de página Home</h1>
            </div>
        </>
    );
}

export default Home;