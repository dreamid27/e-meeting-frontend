import ProviderService from './providerService'

export default class RasafaService extends ProviderService  {
    constructor($axios, $auth) {
        super($axios, $auth)
    }
    
    getDashboard() {
        return this.get({url: process.env.BACKEND_BASE_URL })
    }
}