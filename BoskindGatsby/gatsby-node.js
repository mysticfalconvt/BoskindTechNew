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
async function turnBlogsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const blogTemplate = path.resolve('./src/templates/SingleBlog.js');
  // 2. Query all pizzas
  const { data } = await graphql(`
    query {
      blogs: allSanityPost {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each blog and create a page for that blog
  data.blogs.nodes.forEach((blog) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `blog/${blog.slug.current}`,
      component: blogTemplate,
      context: {
        slug: blog.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([turnUnitsIntoPages(params), turnBlogsIntoPages(params)]);

  const {createRedirect} = actions //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
  createRedirect({ fromPath: '/portfolio', toPath: 'https://portfolio.boskind.tech/', isPermanent: true });
  // 1. Pizzas
  // 2. Toppings
  // 3. Slicemasters
}
