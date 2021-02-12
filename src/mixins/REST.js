export default {
    methods: {
        async sendRESTCommand(urlApi, method, caller, jwttok, body) {
            if (jwttok != 'undefined') {
                let myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", jwttok);
                let requestOptions = {
                    method: method,
                    headers: myHeaders,
                    body: body,
                    redirect: 'follow'
                };
                return await fetch(urlApi, requestOptions)
            }
        }
    }

}
