import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { CardProduct } from "../components/CardProduct";
import { ListComponent } from "../components/listComponent";
import { getDataML } from "../util/api-ml";

const List = (props) => {
  return (
    <div>
      <Head>
        <title>props.title</title>
      </Head>
      <h2>Soy la pagina de Produts</h2>
      <ListComponent productos={props.productos} />
      <Link href="/">
        <p>Ir a la home</p>
      </Link>
    </div>
  );
};

export default List;

export async function getStaticProps() {
  return {
    props: {
      title: "soy el listado del static generation",
      productos: await getDataML("q=zapatillas"),
    },
  };
}
