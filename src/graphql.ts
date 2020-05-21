/* THIS IS A GENERATED FILE, DO NOT EDIT DIRECTLY */

export type StringQueryOperatorInput = {
  eq: string | null;
  ne: string | null;
  in: Array<string | null> | null;
  nin: Array<string | null> | null;
  regex: string | null;
  glob: string | null;
};

export type IntQueryOperatorInput = {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number | null> | null;
  nin: Array<number | null> | null;
};

export type DateQueryOperatorInput = {
  eq: Date | null;
  ne: Date | null;
  gt: Date | null;
  gte: Date | null;
  lt: Date | null;
  lte: Date | null;
  in: Array<Date | null> | null;
  nin: Array<Date | null> | null;
};

export type FloatQueryOperatorInput = {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number | null> | null;
  nin: Array<number | null> | null;
};

export type ImageSharpFilterInput = {
  fixed: ImageSharpFixedFilterInput | null;
  resolutions: ImageSharpResolutionsFilterInput | null;
  fluid: ImageSharpFluidFilterInput | null;
  sizes: ImageSharpSizesFilterInput | null;
  original: ImageSharpOriginalFilterInput | null;
  resize: ImageSharpResizeFilterInput | null;
  id: StringQueryOperatorInput | null;
  parent: NodeFilterInput | null;
  children: NodeFilterListInput | null;
  internal: InternalFilterInput | null;
};

export type ImageSharpFixedFilterInput = {
  base64: StringQueryOperatorInput | null;
  tracedSVG: StringQueryOperatorInput | null;
  aspectRatio: FloatQueryOperatorInput | null;
  width: FloatQueryOperatorInput | null;
  height: FloatQueryOperatorInput | null;
  src: StringQueryOperatorInput | null;
  srcSet: StringQueryOperatorInput | null;
  srcWebp: StringQueryOperatorInput | null;
  srcSetWebp: StringQueryOperatorInput | null;
  originalName: StringQueryOperatorInput | null;
};

export type ImageSharpResolutionsFilterInput = {
  base64: StringQueryOperatorInput | null;
  tracedSVG: StringQueryOperatorInput | null;
  aspectRatio: FloatQueryOperatorInput | null;
  width: FloatQueryOperatorInput | null;
  height: FloatQueryOperatorInput | null;
  src: StringQueryOperatorInput | null;
  srcSet: StringQueryOperatorInput | null;
  srcWebp: StringQueryOperatorInput | null;
  srcSetWebp: StringQueryOperatorInput | null;
  originalName: StringQueryOperatorInput | null;
};

export type ImageSharpFluidFilterInput = {
  base64: StringQueryOperatorInput | null;
  tracedSVG: StringQueryOperatorInput | null;
  aspectRatio: FloatQueryOperatorInput | null;
  src: StringQueryOperatorInput | null;
  srcSet: StringQueryOperatorInput | null;
  srcWebp: StringQueryOperatorInput | null;
  srcSetWebp: StringQueryOperatorInput | null;
  sizes: StringQueryOperatorInput | null;
  originalImg: StringQueryOperatorInput | null;
  originalName: StringQueryOperatorInput | null;
  presentationWidth: IntQueryOperatorInput | null;
  presentationHeight: IntQueryOperatorInput | null;
};

export type ImageSharpSizesFilterInput = {
  base64: StringQueryOperatorInput | null;
  tracedSVG: StringQueryOperatorInput | null;
  aspectRatio: FloatQueryOperatorInput | null;
  src: StringQueryOperatorInput | null;
  srcSet: StringQueryOperatorInput | null;
  srcWebp: StringQueryOperatorInput | null;
  srcSetWebp: StringQueryOperatorInput | null;
  sizes: StringQueryOperatorInput | null;
  originalImg: StringQueryOperatorInput | null;
  originalName: StringQueryOperatorInput | null;
  presentationWidth: IntQueryOperatorInput | null;
  presentationHeight: IntQueryOperatorInput | null;
};

export type ImageSharpOriginalFilterInput = {
  width: FloatQueryOperatorInput | null;
  height: FloatQueryOperatorInput | null;
  src: StringQueryOperatorInput | null;
};

export type ImageSharpResizeFilterInput = {
  src: StringQueryOperatorInput | null;
  tracedSVG: StringQueryOperatorInput | null;
  width: IntQueryOperatorInput | null;
  height: IntQueryOperatorInput | null;
  aspectRatio: FloatQueryOperatorInput | null;
  originalName: StringQueryOperatorInput | null;
};

export type NodeFilterInput = {
  id: StringQueryOperatorInput | null;
  parent: NodeFilterInput | null;
  children: NodeFilterListInput | null;
  internal: InternalFilterInput | null;
};

export type NodeFilterListInput = {
  elemMatch: NodeFilterInput | null;
};

export type InternalFilterInput = {
  content: StringQueryOperatorInput | null;
  contentDigest: StringQueryOperatorInput | null;
  description: StringQueryOperatorInput | null;
  fieldOwners: StringQueryOperatorInput | null;
  ignoreType: BooleanQueryOperatorInput | null;
  mediaType: StringQueryOperatorInput | null;
  owner: StringQueryOperatorInput | null;
  type: StringQueryOperatorInput | null;
};

export type BooleanQueryOperatorInput = {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean | null> | null;
  nin: Array<boolean | null> | null;
};

export type DuotoneGradient = {
  highlight: string;
  shadow: string;
  opacity: number | null;
};

export type Potrace = {
  turnPolicy: PotraceTurnPolicy | null;
  turdSize: number | null;
  alphaMax: number | null;
  optCurve: boolean | null;
  optTolerance: number | null;
  threshold: number | null;
  blackOnWhite: boolean | null;
  color: string | null;
  background: string | null;
};

export type FileFilterInput = {
  sourceInstanceName: StringQueryOperatorInput | null;
  absolutePath: StringQueryOperatorInput | null;
  relativePath: StringQueryOperatorInput | null;
  extension: StringQueryOperatorInput | null;
  size: IntQueryOperatorInput | null;
  prettySize: StringQueryOperatorInput | null;
  modifiedTime: DateQueryOperatorInput | null;
  accessTime: DateQueryOperatorInput | null;
  changeTime: DateQueryOperatorInput | null;
  birthTime: DateQueryOperatorInput | null;
  root: StringQueryOperatorInput | null;
  dir: StringQueryOperatorInput | null;
  base: StringQueryOperatorInput | null;
  ext: StringQueryOperatorInput | null;
  name: StringQueryOperatorInput | null;
  relativeDirectory: StringQueryOperatorInput | null;
  dev: IntQueryOperatorInput | null;
  mode: IntQueryOperatorInput | null;
  nlink: IntQueryOperatorInput | null;
  uid: IntQueryOperatorInput | null;
  gid: IntQueryOperatorInput | null;
  rdev: IntQueryOperatorInput | null;
  ino: FloatQueryOperatorInput | null;
  atimeMs: FloatQueryOperatorInput | null;
  mtimeMs: FloatQueryOperatorInput | null;
  ctimeMs: FloatQueryOperatorInput | null;
  atime: DateQueryOperatorInput | null;
  mtime: DateQueryOperatorInput | null;
  ctime: DateQueryOperatorInput | null;
  birthtime: DateQueryOperatorInput | null;
  birthtimeMs: FloatQueryOperatorInput | null;
  blksize: IntQueryOperatorInput | null;
  blocks: IntQueryOperatorInput | null;
  publicURL: StringQueryOperatorInput | null;
  childImageSharp: ImageSharpFilterInput | null;
  id: StringQueryOperatorInput | null;
  parent: NodeFilterInput | null;
  children: NodeFilterListInput | null;
  internal: InternalFilterInput | null;
};

export type FileSortInput = {
  fields: Array<FileFieldsEnum | null> | null;
  order: Array<SortOrderEnum | null> | null;
};

export type DirectoryFilterInput = {
  sourceInstanceName: StringQueryOperatorInput | null;
  absolutePath: StringQueryOperatorInput | null;
  relativePath: StringQueryOperatorInput | null;
  extension: StringQueryOperatorInput | null;
  size: IntQueryOperatorInput | null;
  prettySize: StringQueryOperatorInput | null;
  modifiedTime: DateQueryOperatorInput | null;
  accessTime: DateQueryOperatorInput | null;
  changeTime: DateQueryOperatorInput | null;
  birthTime: DateQueryOperatorInput | null;
  root: StringQueryOperatorInput | null;
  dir: StringQueryOperatorInput | null;
  base: StringQueryOperatorInput | null;
  ext: StringQueryOperatorInput | null;
  name: StringQueryOperatorInput | null;
  relativeDirectory: StringQueryOperatorInput | null;
  dev: IntQueryOperatorInput | null;
  mode: IntQueryOperatorInput | null;
  nlink: IntQueryOperatorInput | null;
  uid: IntQueryOperatorInput | null;
  gid: IntQueryOperatorInput | null;
  rdev: IntQueryOperatorInput | null;
  ino: FloatQueryOperatorInput | null;
  atimeMs: FloatQueryOperatorInput | null;
  mtimeMs: FloatQueryOperatorInput | null;
  ctimeMs: FloatQueryOperatorInput | null;
  atime: DateQueryOperatorInput | null;
  mtime: DateQueryOperatorInput | null;
  ctime: DateQueryOperatorInput | null;
  birthtime: DateQueryOperatorInput | null;
  birthtimeMs: FloatQueryOperatorInput | null;
  blksize: IntQueryOperatorInput | null;
  blocks: IntQueryOperatorInput | null;
  id: StringQueryOperatorInput | null;
  parent: NodeFilterInput | null;
  children: NodeFilterListInput | null;
  internal: InternalFilterInput | null;
};

export type DirectorySortInput = {
  fields: Array<DirectoryFieldsEnum | null> | null;
  order: Array<SortOrderEnum | null> | null;
};

export type SitePluginFilterInput = {
  id: StringQueryOperatorInput | null;
  parent: NodeFilterInput | null;
  children: NodeFilterListInput | null;
  internal: InternalFilterInput | null;
  resolve: StringQueryOperatorInput | null;
  name: StringQueryOperatorInput | null;
  version: StringQueryOperatorInput | null;
  pluginOptions: SitePluginPluginOptionsFilterInput | null;
  nodeAPIs: StringQueryOperatorInput | null;
  browserAPIs: StringQueryOperatorInput | null;
  ssrAPIs: StringQueryOperatorInput | null;
  pluginFilepath: StringQueryOperatorInput | null;
  packageJson: SitePluginPackageJsonFilterInput | null;
};

export type SitePluginPluginOptionsFilterInput = {
  name: StringQueryOperatorInput | null;
  path: StringQueryOperatorInput | null;
  short_name: StringQueryOperatorInput | null;
  start_url: StringQueryOperatorInput | null;
  background_color: StringQueryOperatorInput | null;
  theme_color: StringQueryOperatorInput | null;
  display: StringQueryOperatorInput | null;
  icon: StringQueryOperatorInput | null;
  cache_busting_mode: StringQueryOperatorInput | null;
  include_favicon: BooleanQueryOperatorInput | null;
  legacy: BooleanQueryOperatorInput | null;
  theme_color_in_head: BooleanQueryOperatorInput | null;
  cacheDigest: StringQueryOperatorInput | null;
  pathCheck: BooleanQueryOperatorInput | null;
};

export type SitePluginPackageJsonFilterInput = {
  name: StringQueryOperatorInput | null;
  description: StringQueryOperatorInput | null;
  version: StringQueryOperatorInput | null;
  main: StringQueryOperatorInput | null;
  author: StringQueryOperatorInput | null;
  license: StringQueryOperatorInput | null;
  dependencies: SitePluginPackageJsonDependenciesFilterListInput | null;
  devDependencies: SitePluginPackageJsonDevDependenciesFilterListInput | null;
  peerDependencies: SitePluginPackageJsonPeerDependenciesFilterListInput | null;
  keywords: StringQueryOperatorInput | null;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: SitePluginPackageJsonDependenciesFilterInput | null;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name: StringQueryOperatorInput | null;
  version: StringQueryOperatorInput | null;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: SitePluginPackageJsonDevDependenciesFilterInput | null;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name: StringQueryOperatorInput | null;
  version: StringQueryOperatorInput | null;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: SitePluginPackageJsonPeerDependenciesFilterInput | null;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name: StringQueryOperatorInput | null;
  version: StringQueryOperatorInput | null;
};

export type SitePageFilterInput = {
  path: StringQueryOperatorInput | null;
  component: StringQueryOperatorInput | null;
  internalComponentName: StringQueryOperatorInput | null;
  componentChunkName: StringQueryOperatorInput | null;
  matchPath: StringQueryOperatorInput | null;
  id: StringQueryOperatorInput | null;
  parent: NodeFilterInput | null;
  children: NodeFilterListInput | null;
  internal: InternalFilterInput | null;
  isCreatedByStatefulCreatePages: BooleanQueryOperatorInput | null;
  pluginCreator: SitePluginFilterInput | null;
  pluginCreatorId: StringQueryOperatorInput | null;
  componentPath: StringQueryOperatorInput | null;
};

export type SitePageSortInput = {
  fields: Array<SitePageFieldsEnum | null> | null;
  order: Array<SortOrderEnum | null> | null;
};

export type SiteSiteMetadataFilterInput = {
  title: StringQueryOperatorInput | null;
  description: StringQueryOperatorInput | null;
  author: StringQueryOperatorInput | null;
};

export type SiteFilterInput = {
  buildTime: DateQueryOperatorInput | null;
  siteMetadata: SiteSiteMetadataFilterInput | null;
  port: IntQueryOperatorInput | null;
  host: StringQueryOperatorInput | null;
  polyfill: BooleanQueryOperatorInput | null;
  pathPrefix: StringQueryOperatorInput | null;
  id: StringQueryOperatorInput | null;
  parent: NodeFilterInput | null;
  children: NodeFilterListInput | null;
  internal: InternalFilterInput | null;
};

export type SiteSortInput = {
  fields: Array<SiteFieldsEnum | null> | null;
  order: Array<SortOrderEnum | null> | null;
};

export type ImageSharpSortInput = {
  fields: Array<ImageSharpFieldsEnum | null> | null;
  order: Array<SortOrderEnum | null> | null;
};

export type SiteBuildMetadataFilterInput = {
  id: StringQueryOperatorInput | null;
  parent: NodeFilterInput | null;
  children: NodeFilterListInput | null;
  internal: InternalFilterInput | null;
  buildTime: DateQueryOperatorInput | null;
};

export type SiteBuildMetadataSortInput = {
  fields: Array<SiteBuildMetadataFieldsEnum | null> | null;
  order: Array<SortOrderEnum | null> | null;
};

export type SitePluginSortInput = {
  fields: Array<SitePluginFieldsEnum | null> | null;
  order: Array<SortOrderEnum | null> | null;
};
export type PotraceTurnPolicy =
  | "TURNPOLICY_BLACK"
  | "TURNPOLICY_WHITE"
  | "TURNPOLICY_LEFT"
  | "TURNPOLICY_RIGHT"
  | "TURNPOLICY_MINORITY"
  | "TURNPOLICY_MAJORITY";
export type ImageFormat = "NO_CHANGE" | "JPG" | "PNG" | "WEBP";
export type ImageCropFocus =
  | "CENTER"
  | "NORTH"
  | "NORTHEAST"
  | "EAST"
  | "SOUTHEAST"
  | "SOUTH"
  | "SOUTHWEST"
  | "WEST"
  | "NORTHWEST"
  | "ENTROPY"
  | "ATTENTION";
export type ImageFit = "COVER" | "CONTAIN" | "FILL" | "INSIDE" | "OUTSIDE";
export type FileFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "publicURL"
  | "childImageSharp___fixed___base64"
  | "childImageSharp___fixed___tracedSVG"
  | "childImageSharp___fixed___aspectRatio"
  | "childImageSharp___fixed___width"
  | "childImageSharp___fixed___height"
  | "childImageSharp___fixed___src"
  | "childImageSharp___fixed___srcSet"
  | "childImageSharp___fixed___srcWebp"
  | "childImageSharp___fixed___srcSetWebp"
  | "childImageSharp___fixed___originalName"
  | "childImageSharp___resolutions___base64"
  | "childImageSharp___resolutions___tracedSVG"
  | "childImageSharp___resolutions___aspectRatio"
  | "childImageSharp___resolutions___width"
  | "childImageSharp___resolutions___height"
  | "childImageSharp___resolutions___src"
  | "childImageSharp___resolutions___srcSet"
  | "childImageSharp___resolutions___srcWebp"
  | "childImageSharp___resolutions___srcSetWebp"
  | "childImageSharp___resolutions___originalName"
  | "childImageSharp___fluid___base64"
  | "childImageSharp___fluid___tracedSVG"
  | "childImageSharp___fluid___aspectRatio"
  | "childImageSharp___fluid___src"
  | "childImageSharp___fluid___srcSet"
  | "childImageSharp___fluid___srcWebp"
  | "childImageSharp___fluid___srcSetWebp"
  | "childImageSharp___fluid___sizes"
  | "childImageSharp___fluid___originalImg"
  | "childImageSharp___fluid___originalName"
  | "childImageSharp___fluid___presentationWidth"
  | "childImageSharp___fluid___presentationHeight"
  | "childImageSharp___sizes___base64"
  | "childImageSharp___sizes___tracedSVG"
  | "childImageSharp___sizes___aspectRatio"
  | "childImageSharp___sizes___src"
  | "childImageSharp___sizes___srcSet"
  | "childImageSharp___sizes___srcWebp"
  | "childImageSharp___sizes___srcSetWebp"
  | "childImageSharp___sizes___sizes"
  | "childImageSharp___sizes___originalImg"
  | "childImageSharp___sizes___originalName"
  | "childImageSharp___sizes___presentationWidth"
  | "childImageSharp___sizes___presentationHeight"
  | "childImageSharp___original___width"
  | "childImageSharp___original___height"
  | "childImageSharp___original___src"
  | "childImageSharp___resize___src"
  | "childImageSharp___resize___tracedSVG"
  | "childImageSharp___resize___width"
  | "childImageSharp___resize___height"
  | "childImageSharp___resize___aspectRatio"
  | "childImageSharp___resize___originalName"
  | "childImageSharp___id"
  | "childImageSharp___parent___id"
  | "childImageSharp___parent___parent___id"
  | "childImageSharp___parent___parent___children"
  | "childImageSharp___parent___children"
  | "childImageSharp___parent___children___id"
  | "childImageSharp___parent___children___children"
  | "childImageSharp___parent___internal___content"
  | "childImageSharp___parent___internal___contentDigest"
  | "childImageSharp___parent___internal___description"
  | "childImageSharp___parent___internal___fieldOwners"
  | "childImageSharp___parent___internal___ignoreType"
  | "childImageSharp___parent___internal___mediaType"
  | "childImageSharp___parent___internal___owner"
  | "childImageSharp___parent___internal___type"
  | "childImageSharp___children"
  | "childImageSharp___children___id"
  | "childImageSharp___children___parent___id"
  | "childImageSharp___children___parent___children"
  | "childImageSharp___children___children"
  | "childImageSharp___children___children___id"
  | "childImageSharp___children___children___children"
  | "childImageSharp___children___internal___content"
  | "childImageSharp___children___internal___contentDigest"
  | "childImageSharp___children___internal___description"
  | "childImageSharp___children___internal___fieldOwners"
  | "childImageSharp___children___internal___ignoreType"
  | "childImageSharp___children___internal___mediaType"
  | "childImageSharp___children___internal___owner"
  | "childImageSharp___children___internal___type"
  | "childImageSharp___internal___content"
  | "childImageSharp___internal___contentDigest"
  | "childImageSharp___internal___description"
  | "childImageSharp___internal___fieldOwners"
  | "childImageSharp___internal___ignoreType"
  | "childImageSharp___internal___mediaType"
  | "childImageSharp___internal___owner"
  | "childImageSharp___internal___type"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";
export type SortOrderEnum = "ASC" | "DESC";
export type DirectoryFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";
export type SitePageFieldsEnum =
  | "path"
  | "component"
  | "internalComponentName"
  | "componentChunkName"
  | "matchPath"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "isCreatedByStatefulCreatePages"
  | "pluginCreator___id"
  | "pluginCreator___parent___id"
  | "pluginCreator___parent___parent___id"
  | "pluginCreator___parent___parent___children"
  | "pluginCreator___parent___children"
  | "pluginCreator___parent___children___id"
  | "pluginCreator___parent___children___children"
  | "pluginCreator___parent___internal___content"
  | "pluginCreator___parent___internal___contentDigest"
  | "pluginCreator___parent___internal___description"
  | "pluginCreator___parent___internal___fieldOwners"
  | "pluginCreator___parent___internal___ignoreType"
  | "pluginCreator___parent___internal___mediaType"
  | "pluginCreator___parent___internal___owner"
  | "pluginCreator___parent___internal___type"
  | "pluginCreator___children"
  | "pluginCreator___children___id"
  | "pluginCreator___children___parent___id"
  | "pluginCreator___children___parent___children"
  | "pluginCreator___children___children"
  | "pluginCreator___children___children___id"
  | "pluginCreator___children___children___children"
  | "pluginCreator___children___internal___content"
  | "pluginCreator___children___internal___contentDigest"
  | "pluginCreator___children___internal___description"
  | "pluginCreator___children___internal___fieldOwners"
  | "pluginCreator___children___internal___ignoreType"
  | "pluginCreator___children___internal___mediaType"
  | "pluginCreator___children___internal___owner"
  | "pluginCreator___children___internal___type"
  | "pluginCreator___internal___content"
  | "pluginCreator___internal___contentDigest"
  | "pluginCreator___internal___description"
  | "pluginCreator___internal___fieldOwners"
  | "pluginCreator___internal___ignoreType"
  | "pluginCreator___internal___mediaType"
  | "pluginCreator___internal___owner"
  | "pluginCreator___internal___type"
  | "pluginCreator___resolve"
  | "pluginCreator___name"
  | "pluginCreator___version"
  | "pluginCreator___pluginOptions___name"
  | "pluginCreator___pluginOptions___path"
  | "pluginCreator___pluginOptions___short_name"
  | "pluginCreator___pluginOptions___start_url"
  | "pluginCreator___pluginOptions___background_color"
  | "pluginCreator___pluginOptions___theme_color"
  | "pluginCreator___pluginOptions___display"
  | "pluginCreator___pluginOptions___icon"
  | "pluginCreator___pluginOptions___cache_busting_mode"
  | "pluginCreator___pluginOptions___include_favicon"
  | "pluginCreator___pluginOptions___legacy"
  | "pluginCreator___pluginOptions___theme_color_in_head"
  | "pluginCreator___pluginOptions___cacheDigest"
  | "pluginCreator___pluginOptions___pathCheck"
  | "pluginCreator___nodeAPIs"
  | "pluginCreator___browserAPIs"
  | "pluginCreator___ssrAPIs"
  | "pluginCreator___pluginFilepath"
  | "pluginCreator___packageJson___name"
  | "pluginCreator___packageJson___description"
  | "pluginCreator___packageJson___version"
  | "pluginCreator___packageJson___main"
  | "pluginCreator___packageJson___author"
  | "pluginCreator___packageJson___license"
  | "pluginCreator___packageJson___dependencies"
  | "pluginCreator___packageJson___dependencies___name"
  | "pluginCreator___packageJson___dependencies___version"
  | "pluginCreator___packageJson___devDependencies"
  | "pluginCreator___packageJson___devDependencies___name"
  | "pluginCreator___packageJson___devDependencies___version"
  | "pluginCreator___packageJson___peerDependencies"
  | "pluginCreator___packageJson___peerDependencies___name"
  | "pluginCreator___packageJson___peerDependencies___version"
  | "pluginCreator___packageJson___keywords"
  | "pluginCreatorId"
  | "componentPath";
export type SiteFieldsEnum =
  | "buildTime"
  | "siteMetadata___title"
  | "siteMetadata___description"
  | "siteMetadata___author"
  | "port"
  | "host"
  | "polyfill"
  | "pathPrefix"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";
export type ImageSharpFieldsEnum =
  | "fixed___base64"
  | "fixed___tracedSVG"
  | "fixed___aspectRatio"
  | "fixed___width"
  | "fixed___height"
  | "fixed___src"
  | "fixed___srcSet"
  | "fixed___srcWebp"
  | "fixed___srcSetWebp"
  | "fixed___originalName"
  | "resolutions___base64"
  | "resolutions___tracedSVG"
  | "resolutions___aspectRatio"
  | "resolutions___width"
  | "resolutions___height"
  | "resolutions___src"
  | "resolutions___srcSet"
  | "resolutions___srcWebp"
  | "resolutions___srcSetWebp"
  | "resolutions___originalName"
  | "fluid___base64"
  | "fluid___tracedSVG"
  | "fluid___aspectRatio"
  | "fluid___src"
  | "fluid___srcSet"
  | "fluid___srcWebp"
  | "fluid___srcSetWebp"
  | "fluid___sizes"
  | "fluid___originalImg"
  | "fluid___originalName"
  | "fluid___presentationWidth"
  | "fluid___presentationHeight"
  | "sizes___base64"
  | "sizes___tracedSVG"
  | "sizes___aspectRatio"
  | "sizes___src"
  | "sizes___srcSet"
  | "sizes___srcWebp"
  | "sizes___srcSetWebp"
  | "sizes___sizes"
  | "sizes___originalImg"
  | "sizes___originalName"
  | "sizes___presentationWidth"
  | "sizes___presentationHeight"
  | "original___width"
  | "original___height"
  | "original___src"
  | "resize___src"
  | "resize___tracedSVG"
  | "resize___width"
  | "resize___height"
  | "resize___aspectRatio"
  | "resize___originalName"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";
export type SiteBuildMetadataFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "buildTime";
export type SitePluginFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "resolve"
  | "name"
  | "version"
  | "pluginOptions___name"
  | "pluginOptions___path"
  | "pluginOptions___short_name"
  | "pluginOptions___start_url"
  | "pluginOptions___background_color"
  | "pluginOptions___theme_color"
  | "pluginOptions___display"
  | "pluginOptions___icon"
  | "pluginOptions___cache_busting_mode"
  | "pluginOptions___include_favicon"
  | "pluginOptions___legacy"
  | "pluginOptions___theme_color_in_head"
  | "pluginOptions___cacheDigest"
  | "pluginOptions___pathCheck"
  | "nodeAPIs"
  | "browserAPIs"
  | "ssrAPIs"
  | "pluginFilepath"
  | "packageJson___name"
  | "packageJson___description"
  | "packageJson___version"
  | "packageJson___main"
  | "packageJson___author"
  | "packageJson___license"
  | "packageJson___dependencies"
  | "packageJson___dependencies___name"
  | "packageJson___dependencies___version"
  | "packageJson___devDependencies"
  | "packageJson___devDependencies___name"
  | "packageJson___devDependencies___version"
  | "packageJson___peerDependencies"
  | "packageJson___peerDependencies___name"
  | "packageJson___peerDependencies___version"
  | "packageJson___keywords";
