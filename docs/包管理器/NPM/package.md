# Packages

About package formats
A package is any of the following:

a) A folder containing a program described by a package.json file.
b) A gzipped tarball containing (a).
c) A URL that resolves to (b).
d) A `<name>@<version>` that is published on the registry with (c).
e) A `<name>@<tag>` that points to (d).
f) A `<name>` that has a latest tag satisfying (e).
g) A git url that, when cloned, results in (a).