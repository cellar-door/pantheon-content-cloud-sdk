import { NextSeo } from "next-seo";
import Image from "next/image";
import Layout from "../components/layout";
import { PostGrid } from "../components/grid";
import { getArticles } from "@pantheon-systems/pcc-react-sdk";
import { pantheonClient } from "../lib/PantheonClient";
import { searchQueryAtom } from "../components/searchbar";
import { useEffect } from "react";
import { useAtom } from "jotai";

export default function Search({ articles, searchString }) {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);

  useEffect(() => {
    setSearchQuery(searchString);
  }, []);

  const HomepageHeader = () => (
    <div className="prose sm:prose-xl mt-20 flex flex-col mx-auto max-w-fit">
      <h1 className="prose text-4xl text-center h-full">
        Welcome to{" "}
        <a
          className="text-blue-600 no-underline hover:underline"
          href="https://nextjs.org"
        >
          Next.js!
        </a>
      </h1>
      <div className="text-2xl">
        <div className="bg-black text-white rounded flex items-center justify-center p-4">
          Decoupled PCC on{" "}
          <Image
            src="/pantheon.png"
            alt="Pantheon Logo"
            style={{
              margin: 0,
            }}
            width={191}
            height={60}
          />
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <NextSeo
        title="Decoupled Next PCC Demo"
        description="Generated by create-pantheon-decoupled-kit."
      />
      <HomepageHeader />
      <h3 className="text-center text-3xl">
        Search results for &quot;{searchQuery}&quot;
      </h3>
      <section>
        <PostGrid contentType="posts" data={articles} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const articles = await getArticles(
    pantheonClient,
    {
      publishingLevel: "PRODUCTION",
    },
    {
      titleContains: query.q,
    }
  );

  return {
    props: {
      articles,
      searchString: query.q,
    },
  };
}
