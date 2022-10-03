set -e
echo "deploy start"

cd /usr/src/fe-notes-docusaurus

docker-compose down

npm i -g yarn

yarn

# yarn build

docker-compose up

echo "deploy end"