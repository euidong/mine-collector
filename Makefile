ifndef TAG
  $(error TAG is not defined.)
endif

build:
	docker build .
	docker push justicedong/mine-collector:$(TAG)
