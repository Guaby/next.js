import Head from "next/head";
// import { Tip } from "../components/Tip";
import { Container } from "../components/Container";

// import Button from "https://framer.com/m/Button-vA04.js"
// import Table from "https://framer.com/m/Table-VYAj.js@0YxgSwy7luCHT63Mz04Z"
import FeatureWindow from "https://framer.com/m/Feature-window-ekJs.js"

// A Smart Component from Framer
// import Toggle from "https://framer.com/m/Toggle-B5iT.js@52zFaz7rN7Bt3pjtYxWH";

export default function Home() {
  return (
    <>
      <Head>
        <title>Framer</title>
        <meta name="description" content="Modules" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container>
        {/* <Button /> */}
        {/* <Table /> */}
        <FeatureWindow />
      </Container>
    </>
  );
}
