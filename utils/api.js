
const DOMAIN = `https://64832aa2f2e76ae1b95c0f17.mockapi.io/`
export default class Api {
    callApi(uri, method, data) {
        return axios({
            url: `${DOMAIN}/${uri}`,
            method,
            data,
        });
    }
}