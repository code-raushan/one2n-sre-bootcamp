# .PHONY: install
# install:
# 	npm install

# .PHONY: build
# build: install
# 	npm run build

# .PHONY: start
# start: build
# 	npm start

.PHONY: start-db migrate-db build-api run-api setup

start-db:
	docker-compose up -d db

migrate-db:
	@echo "Running DB migrations..."
	npx prisma migrate dev --name prod

build-api: start-db
	docker-compose build api

run-api: start-db migrate-db
	docker-compose up -d api

setup: start-db build-api run-api
