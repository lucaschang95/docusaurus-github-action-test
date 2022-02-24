# `@import`

> The @import CSS at-rule is used to import style rules from other style sheets

## Syntax

url
Is a <string> or a <url>() representing the location of the resource to import. The URL may be absolute or relative.

list-of-media-queries
Is a comma-separated list of media queries conditioning the application of the CSS rules defined in the linked URL. If the browser does not support any of these queries, it does not load the linked resource.