import ProviderService from './providerService'

export default class PartnerService extends ProviderService  {
    constructor($axios, $auth) {
        super($axios, $auth)
    }

    getPartners(_params) {
        return this.get({url: process.env.BACKEND_BASE_URL  + 'partner/get', params: _params })
    }

    getRequestPartnersMe(_params) {
        return this.get({url: process.env.BACKEND_BASE_URL + 'partner/request/me', params: _params});
    }

    postRequestTaaruf(_data) {
        return this.post({url: process.env.BACKEND_BASE_URL + 'partner/add'}, _data);
    }

    postSetStatusTaaruf(_data) {
        return this.post({url: process.env.BACKEND_BASE_URL + 'partner/status'}, _data);
    }
}