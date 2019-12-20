import ProviderService from './providerService'

export default class ProfileService extends ProviderService  {
    constructor($axios, $auth) {
        super($axios, $auth)
    }

    getMyProfile() {
        return this.get({url: process.env.BACKEND_BASE_URL  + 'profile/me'})
    }

    updateProfile(_formData) {
        return this.put({url: process.env.BACKEND_BASE_URL + 'profile'}, _formData);
    }
}