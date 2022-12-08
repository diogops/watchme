import Link from 'next/link'

const Error = () => {
    return (
        <div className='text-center'>
            <div className='text-center py-12 mt-12 '>
                <h1 className='text-2xl font-bold'>404 - Page Not Found</h1>
                <Link href="/">
                    <span className="font-color text-blue-600 underline">Go back home</span>
                </Link>
            </div>
        </div>
    );
}

export default Error;