# git pull

## Syntax

`git pull [<options>] [<repository <refspec>]`

More precisely, git pull runs git fetch with the given parameters and then depending on configuration options or command line flags, will call either git rebase or git merge to reconcile diverging branches.

- 默认的`<repository>`和`<refspec>`是`git branch`中设置的`track`

## options

### Options related to merging

###### `--edit`

###### `--e`

###### `--no-edit`

edit commit message

###### `--ff-only`

Only update to the new history if there is no divergent local history

- 无法进行fast-fowward时, abort

###### `--ff`

fast-forward -> merge

###### `--no-ff`

merge in all cases

###### `-r`

###### `--rebase`

###### `--no-rebase`