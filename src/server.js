import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            user: Model,
        },

        seeds(server) {
            server.create("user", { name: "Bob" })
            server.create("user", { name: "Alice" })
        },

        routes() {
            this.namespace = "10.10.0.122:8083"
            this.get("/monitoring/state", { users: [{ id: 1, name: "Bob" }] })
            this.post("/monitoring/state", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                console.log(attrs)
                return {type: 'gsMonitoring', state: 'On'}
            })
        },
    })

    return server
}
