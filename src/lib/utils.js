import moment from "moment";

export function convertDateToString(date) {
  const dateAsString = moment(date).format("DD MMMM, YYYY");
  return dateAsString;
}

export function getDoubleLine(string) {
  return string.split("---").join("</br>");
}

export function convertYearToString(date) {
  const dateYear = moment(date).format("YYYY");
  return dateYear;
}

export async function getColeccionesPosts() {
  const posts = import.meta.glob("/src/routes/colecciones/posts/*.md");
  let postsList = [];

  for (const file in posts) {
    const { metadata } = await posts[file]();
    const slug = file.match(/\/([\w-]+)\.md$/)[1];

    postsList.push({
      slug,
      ...metadata,
    });
  }

  const sortedPosts = postsList.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return sortedPosts;
}
