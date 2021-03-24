export default {
    methods: {
        async sendRESTCommand(url, method = 'GET', caller, jwttok, body) {
            try {
                if (jwttok != 'undefined') {
                    let myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    // myHeaders.append("Authorization", jwttok);
                    let requestOptions = {
                        method: method,
                        headers: myHeaders,
                        body: body,
                        redirect: 'follow'
                    };
                    const response = await fetch(url, requestOptions)
                    return response
                }
            } catch (e) {
                console.warn('Error:', e.message())
            }

        }
    }

}
