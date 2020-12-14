import path, { resolve } from 'path';

async function turnUnitsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const unitTemplate = path.resolve('./src/templates/Unit.js');
  // 2. Query all pizzas
  const { data } = await graphql(`
    query {
      units: allSanityUnit {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each pizza and create a page for that pizza
  data.units.nodes.forEach((unit) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `unit/${unit.slug.current}`,
      component: unitTemplate,
      context: {
        slug: unit.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([turnUnitsIntoPages(params)]);
  // 1. Pizzas
  // 2. Toppings
  // 3. Slicemasters
}
