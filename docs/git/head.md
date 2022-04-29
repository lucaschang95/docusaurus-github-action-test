# HEAD

> A head is simply a reference to a commit object. > > Each head has a name (branch name or tag name, etc). By default, there is a head in every repository called master.
> At any given time, one head is selected as the “current head.” This head is aliased to HEAD, always in capitals".
> HEAD其实就是一个pointer, 指向当前branch的head

HEAD 解决了一个问题...

"where am I?"

## Detached HEAD

> HEAD is detached when it is not attached to a branch.

you detach the HEAD by checking out a commit