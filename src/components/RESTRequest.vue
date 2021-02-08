<script>
export default {
  name: 'RESTRequest',
  methods: {
    async sendCommand(urlApi, method, caller, jwttok, body) {
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

        return await fetch(urlApi, requestOptions)
                // .then(response => {
                //   response.json().then(function(json) {
                //     console.log('text', json)
                //   });
                // })
                // .then(error => {
                //   return error
                // })
      }
    }
  }

}
</script>
