import { API_URL } from "../app/(home)/page";

async function getViedos(id: string) {
  console.log(`fetching videos :  ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return await response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getViedos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
