import { error } from "@sveltejs/kit";
import { getColeccionesPosts } from "$lib/utils.js";

export async function load({ params }) {
  const sortedPosts = await getColeccionesPosts();
  const recentPosts = sortedPosts;

  return {
    recentPosts,
  };

  throw error(404, "Not found");
}
