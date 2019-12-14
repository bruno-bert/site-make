/**
 * Copygatsby-node.js: copy code to clipboard
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    schema.buildObjectType({
      name: "ContributorJson",
      fields: {
        name: "String!",
        firstName: "String!",
        email: "String!",
        receivedSwag: {
          type: "Boolean",
          resolve: source => source.receivedSwag || false,
        },
      },
      interfaces: ["Node"],
    }),
  ]
  createTypes(typeDefs)
}
 * 
 */
