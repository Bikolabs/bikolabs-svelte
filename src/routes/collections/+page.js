import { error } from "@sveltejs/kit";
import { getColeccionesPosts } from "$lib/utils.js";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const sortedPosts = getColeccionesPosts();

  return {
    sortedPosts,
  };

  throw error(404, "Not found");
}
