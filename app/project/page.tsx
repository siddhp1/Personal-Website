import Image from "next/image";

import Header from "@/components/Header";

export default async function Projects() {
  const data = await getProjects();
  console.log(data.items[0].fields);
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
async function getProjects() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?content_type=project`,
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
