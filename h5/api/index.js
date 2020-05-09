import codes from './state_code.js';
import login from './login.js';
import temp from './temp.js'
export default {
    stateCode: codes,
    ...login,
	...temp,
}
