#!/bin/sh
npm run build
git subtree push --prefix dist origin gh-pages --squash
read