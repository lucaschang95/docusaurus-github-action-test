import FingerprintJS from '@fingerprintjs/fingerprintjs';
const storageId = 'fe-note-docusaurus-fp';
const fpPromise = FingerprintJS.load();

// 获取remote点赞状态
export const getLikeStatus = async (id: string) => {
  let has = false;
  fetch(`/api/webpage-like/status?${new URLSearchParams({
    id,
  })}`)
    .then(res => res.json())
    .then((res) => {
      has = res?.data?.liked ?? false;
    })
  return has;
};

export const likeWebpage = async (id: string) => {
  fetch(`/api/webpage-like/like?${new URLSearchParams({
    id,
  })}`)
    .then(res => res.json())
  // fetch(`/api/webpage-like/status?${new URLSearchParams({
  //   id,
  // })}`)
};

export const getLikeCount = async () => {
  return fetch('/api/webpage-like/like/count')
    .then(res => res.json())
    .then(res => res?.data?.count)
}