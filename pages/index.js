import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Result from "../components/Result";
import request from "../utils/request";

export default function Home({ result }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Result result={result}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const requests = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      result: requests.results,
    },
  };
}