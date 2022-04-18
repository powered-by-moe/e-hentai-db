install:
	npm install --production
	npm run build

install-dev:
	npm install
	npm run build

start:
	npm start

docker-build:
	docker compose build

docker-start:
	docker compose up -d

docker-stop:
	docker compose down

docker-logs:
	docker compose logs

docker-sync:
	docker compose run --rm node npm run sync

docker-resync:
	docker compose run --rm node npm run resync