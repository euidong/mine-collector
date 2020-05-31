import axios from 'axios';

function posetRecord (nickName, time, height, width, minePercent) {
  try {
    axios({
      url: process.env.REACT_APP_APISERVER + "/record/upload",
      method: "POST",
      data: {
          nickName: nickName,
          time: time,
          height: height,
          width: width,
          minePercent: minePercent
      }
    })
    .then(res => {
      if (res.data === "success")
          return 'success';
        return 'error';
    });
  } catch(err) {
    return '잘못된 요청입니다.';
  }
  

}

export default posetRecord;