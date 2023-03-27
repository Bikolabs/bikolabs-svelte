import { error } from "@sveltejs/kit";
import { getBlogPosts } from "$lib/utils.js";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const sortedPosts = await getBlogPosts();
  const recentPosts = sortedPosts.slice(0, 3);

  return {
    recentPosts,
  };

  throw error(404, "Not found");
}
