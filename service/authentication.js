
let env = process.env;
export default class AuthenticationService {
    constructor($axios) {
        this.$axios = $axios
    }

    postLogin(userModel) {
        return this.$axios.request({ 
            'url': env.BACKEND_BASE_URL + 'auth/login',
            'data': userModel,
            'method': 'POST',
            'headers': {
				'Content-Type' : 'application/json'
			}
        });
    }

    postRegister(userModel) {
        return this.$axios.request({ 
            'url': env.BACKEND_BASE_URL + 'auth/register',
            'data': userModel,
            'method': 'POST',
            'headers': {
				'Content-Type' : 'application/json'
			}
        });
    }

}