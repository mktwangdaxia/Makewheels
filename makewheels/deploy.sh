rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin https://mktwangdaxia.github.io/daxia-ui/index.html &&
git push -f -u origin master &&
cd -
echo https://mktwangdaxia.github.io/daxia-ui/index.html