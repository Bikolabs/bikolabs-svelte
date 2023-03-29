import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const post = await import(`../posts/${params.slug}.md`);
  const {
    title,
    subtitle,
    date,
    tags,
    titlelink,
    materials,
    image,
    alt,
    link,
  } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    subtitle,
    date,
    tags,
    titlelink,
    materials,
    image,
    alt,
    link,
  };

  throw error(404, "Not found");
}
