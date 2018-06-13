# GET ATTRIBUTES FROM PACKAGEFILE
define GetFromPkg
$(shell node -p "require('./package.json').$(1)")
endef

include .env
export $(shell sed 's/=.*//' .env)

run:
	npm run dev
