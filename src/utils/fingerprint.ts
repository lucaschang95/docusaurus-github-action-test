import FingerprintJS from '@fingerprintjs/fingerprintjs';
const storageId = 'fe-note-docusaurus-fp';
const fpPromise = FingerprintJS.load();

export const getFingerprint = async () => {
  let res: string;
  res = localStorage.getItem(storageId);
  if (!res) {
    const fp = await fpPromise;
    const result = await fp.get();
    if (result?.visitorId) {
      res = result.visitorId;
    }
  }
  // res should be a string
  return res;
};

export const saveFingerprint = (id: string) => {
  localStorage.setItem(storageId, id);
};