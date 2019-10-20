import RasafaService from './rasafaService'
export default class ProviderService extends RasafaService {
    constructor($axios, $auth) {
        super($auth)
        this.$axios = $axios
    }

    get({url, params = {} , headers = {}}) {
        let tempHeader = Object.assign(headers, {
            'Content-Type' : 'application/json',
            'Authorization': this._AUTHID })
        let tempParams = Object.assign(params, {})
        return this.$axios.request({
            'url': url,
            'params': tempParams,
            'headers': tempHeader,
            'method': 'GET'
        })    
    }

    post({url, params = {}, headers = {}}, dataModel) {
        let tempHeader = Object.assign(headers, {
            'Content-Type' : 'application/json',
            'Authorization': this._AUTHID})   
        let tempParams = Object.assign(params, {})

        return this.$axios.request({ 
            'url': url,
            'params': tempParams,
            'data': dataModel,
            'headers': tempHeader,
            'method': 'POST'
        });
    }
}