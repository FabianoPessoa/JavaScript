#! /bin/sh
git status
git add * && git commit -m "*"
git log --oneline --graph -all
