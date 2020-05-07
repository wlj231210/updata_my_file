
import codes from './state_code.js'; //状态码，报错提示
import login from './login.js';
import user from './user.js';
// import upload from './upload.js';
// import appcreate from './appcreate.js';

export default  {
    stateCode: codes,
    ...login,
    ...user,
    // ...upload,
    // ...appcreate,
};

