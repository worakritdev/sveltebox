import { find } from "$lib/database/db.svelte";

export async function get({ params }) {
  const { slug } = params;
  console.log(slug);
  const result = find(slug);
  console.log(result);
  
  return {
    status: 200,
    body: {
      slug: slug,
    },
  };
}

// #TODO
