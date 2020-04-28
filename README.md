# 지뢰찾기

- 2020 - 1 React toy project

- Test : [github page](https://euidong.github.io/mine-collector)

- Dockerhub : https://hub.docker.com/repository/docker/justicedong/mine-collector/general

- 🚫 gh page 자동 배포를 위해, package.json에 homepage:"https://euidong.github.io/mine-collector" 가 있는데, <br>
docker를 이용해서 배포 시에는 반드시 삭제해야한다. 그렇지 않으면 빌드가 제대로 되지 않음.

- docker는 multi를 이용하였고, CRA의 webpack을 이용하여 build를 한 후에, 이를 nginx 서버에 올려서 사용한다. 

