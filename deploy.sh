#!/bin/sh
npm run build
git add .
git commit -am "Deploy to gh-pages"
git subtree push --prefix dist origin gh-pages --squash
read