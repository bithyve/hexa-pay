import cryptoJS from 'crypto-js';
import 'react-native-get-random-values';

export const encrypt = (data: string, key: string) => {
  const ciphertext = cryptoJS.AES.encrypt(data, key);
  return ciphertext.toString();
};

export const decrypt = (ciphertext: string, key: string | cryptoJS.lib.WordArray) => {
  try {
    const bytes = cryptoJS.AES.decrypt(ciphertext, key);
    const decryptedData = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
    return decryptedData;
  } catch (e) {
    return null;
  }
};

export const decrypt1 = (ciphertext: string, key: string | cryptoJS.lib.WordArray) => {
  const info2 = cryptoJS.AES.decrypt(ciphertext, key).toString(cryptoJS.enc.Utf8);
  return info2;
};
export const hash = (data: string) => cryptoJS.SHA512(data).toString();
export const hash256 = (data: string) => cryptoJS.SHA256(data).toString();

export function stringToArrayBuffer(byteString: string) {
  const byteArray = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.codePointAt(i) as number;
  }
  return byteArray;
}

export const generateKey = async () => {
  const randomBytes = await crypto.getRandomValues(new Uint8Array(16));
  return hash256(randomBytes.toString());
};
