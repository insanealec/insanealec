#!/bin/sh
npm run build
git add .
git commit -am "Deploy to gh-pages"
git push
git subtree push --prefix dist origin gh-pages --squash