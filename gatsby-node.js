const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  // Transform the new node here and create a new node or
  // create a new node field.
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      //same as node: node
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //dynamically create pages here
  //get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  //get slugs
  const response = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { keytype: { eq: null } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  //create new pages with unique slug
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type SiteSiteMetadata {
      title: String
      description: String
    }
    type MarkdownRemark implements Node {
      id: String
      html: String
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      logo: File @fileByRelativePath
      image: File @fileByRelativePath
      heroImage: File @fileByRelativePath
      links: Links
      keytype: String
      title: String
      date: Date @dateformat
      name: String
      tagline: String
    }
    type Links {
      twitter: String
      facebook: String
      instagram: String
      youtube: String
      github: String
    }
    type Fields {
      slug: String
    }
  `)
}
