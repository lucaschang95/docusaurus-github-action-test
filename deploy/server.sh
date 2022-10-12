set -e
echo "deploy start"

cd /usr/src/fe-notes-docusaurus

docker-compose down --remove-orphans

docker-compose up

echo "deploy end"