# flowtype-hoc-exploration

Forked from https://github.com/pcardune/flowtype-hoc-exploration

In my fork, I make note of different Flow behavior based on whether code is in 1 file, 2 files, or 3 files.

## 1 file

Code: https://github.com/saltycrane/flowtype-hoc-exploration/tree/1-file

When all the code is in 1 file, Flow behaves as expected and reports 2 errors.

## 2 files (before fix)

Code: https://github.com/saltycrane/flowtype-hoc-exploration/tree/2-files

When I split the code into 2 files, Flow gave me a new error that I didn't understand. At first I thought there is something wrong with Flow, but I remembered that Flow requires additional type declarations at module boundaries.

## 2 files (fixed)

Code: https://github.com/saltycrane/flowtype-hoc-exploration/tree/2-files-withfix

I added a type declaration for the exported component (thanks to https://github.com/facebook/flow/issues/2541#issuecomment-250395535) and now Flow behaves as expected and reports 2 errors.

## 3 files (Flow bug)

Code: https://github.com/saltycrane/flowtype-hoc-exploration/tree/3-files-incorrect

The code is split into 3 files. Flow reports there are 0 errors when it should report 2 errors. I think this is a Flow bug.

## 3 files (fix with explicit type)

Code: https://github.com/saltycrane/flowtype-hoc-exploration/tree/3-files-withfix

If I add an explicit type declaration as I did for the 2 files case, Flow reports 2 errors as expected.
