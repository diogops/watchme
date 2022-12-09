import Head from 'next/head';

const Meta = ({ description, author, keywords, title }) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="Portuguese" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Watch Me',
    keywords: 'movie app, free movies, popular movies, movies, tv shows, series, watch, watchme, watch me',
    description: 'Watch Me is a movie app that allows you to watch free movies and tv shows',
}

export default Meta;