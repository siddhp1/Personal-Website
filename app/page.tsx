import Image from "next/image";

import Header from "@/components/Header";

export default async function Home() {
  // const data = await getData();
  // console.log(data.fields);
  // const imageData = await getImage();

  // if (!imageData) {
  //   return <div>Image not found</div>;
  // }

  //const imageUrl = `https:${imageData.url}`;

  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center p-24">
        <h1>Hello, Next.js!</h1>
        {/* <Image
          src={imageUrl}
          width={500}
          height={500}
          alt="Picture of the author"
        /> */}
      </main>
    </>
  );
}

// This is how we get anything that is text based.
async function getData() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/${process.env.GENERAL_ENTRY_ID}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

async function getImage() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/assets/`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.fields.file;
}
