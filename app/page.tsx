import db from "@/lib/db";

export default async function Home() {
  const artists = await db.artist.findMany({});

  return (
    <div>
      {artists.map((artist) => {
        return <div key={artist.id}>{artist.name}</div>;
      })}
    </div>
  );
}
