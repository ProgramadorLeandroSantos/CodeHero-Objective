import axios from 'axios';
import md5 from 'md5';

//These api keys will be deleted soon
const publickey = '390fb54aad26d797a7e5554481dee5c1';
const privateKey = '4d5c1eec830386a0c2f43785bdfc08483ddb3feb';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publickey);

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: publickey,
    hash,
  },
});

export default api;
