import videos from "./videos.json";

export async function getAllVideos() {
  return videos.sort(
    (a, z) => new Date(z.postingDate) - new Date(a.postingDate)
  );
}
