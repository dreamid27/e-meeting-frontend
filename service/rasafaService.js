export default class RasafaService {
    constructor($auth) {
        this.$auth = $auth
        this._AUTHID = this.getAuthorization()
    }

    getAuthorization() {
        let authID = this.$auth.getToken('local')
        return authID
    }
}