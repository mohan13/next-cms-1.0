import Head from "next/head";
// import Home1 from "./Home/index";
import LogIn from './Form/index'
export default function Home() {
  return (
    <div>
      <Head>
        <title>CMS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LogIn/>
        {/* <Home1 /> */}
      </main>
    </div>
  );
}
