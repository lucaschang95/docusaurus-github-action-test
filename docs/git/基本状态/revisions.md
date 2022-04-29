# revisions

> 

## revision Range Summary

`<rev>`
Include commits that are reachable from `<rev>` (i.e. `<rev>` and its ancestors).

`^<rev>`
Exclude commits that are reachable from `<rev>` (i.e. `<rev>` and its ancestors).

`<rev1>..<rev2>`
Include commits that are reachable from `<rev2>` but exclude those that are reachable from `<rev1>`. When either `<rev1>` or `<rev2>` is omitted, it defaults to HEAD.

`<rev1>...<rev2>`
Include commits that are reachable from either `<rev1>` or `<rev2>` but exclude those that are reachable from both. When either `<rev1>` or `<rev2>` is omitted, it defaults to HEAD.