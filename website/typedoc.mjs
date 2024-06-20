/**
 * @type {Partial<import("typedoc").TypeDocOptions> &
 *   Partial<import("typedoc-plugin-markdown").PluginOptions> &
 *   Partial<import("docusaurus-plugin-typedoc").PluginOptions> &
 *   Partial<
 *     import("typedoc-plugin-frontmatter/dist/options/models").PluginOptions
 *   >}
 */
const options = {
  name: "API",
  includeVersion: true,
  basePath: "../",
  entryPoints: ["../src/index.ts"],
  tsconfig: "../tsconfig-docs.json",
  categorizeByGroup: true,
  groupOrder: [
    "DayPicker",
    "Props",
    "Classes",
    "Components",
    "Formatters",
    "Labels",
    "Utilities",
    "Hooks",
    "Contexts",
    "*"
  ],
  readme: "none",

  excludePrivate: true,
  excludeProtected: true,
  sort: ["alphabetical"],

  entryFileName: "index.mdx",

  expandObjects: true,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  preserveAnchorCasing: false,

  parametersFormat: "table",
  propertiesFormat: "list",
  enumMembersFormat: "table",
  typeDeclarationFormat: "list",
  indexFormat: "table",

  plugin: ["typedoc-plugin-markdown", "typedoc-plugin-frontmatter"],
  frontmatterGlobals: {
    pagination_next: null,
    pagination_prev: null
  }
};

export default options;
