
import codes from './state_code.js'; //状态码，报错提示
import login from './login.js';
import user from './user.js';
import sms from './sms.js';
import accessKey from './accessKey.js';
import ssl from './ssl.js';
import wallet from './wallet'
// import upload from './upload.js';
// import appcreate from './appcreate.js';

export default  {
    stateCode: codes,
    ...login,
    ...user,
    ...sms,
    ...accessKey,
    ...ssl,
    ...wallet
    // ...upload,
    // ...appcreate,
};

