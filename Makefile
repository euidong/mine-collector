ifndef TAG
  $(error TAG is not defined.)
endif

build:
	docker build -t justicedong/mine-collector:$(TAG) .
	docker push justicedong/mine-collector:$(TAG)
