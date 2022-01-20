import axios from "axios"

export function list() {
    return axios.get("/tasks").then(p => p.data)
}

export function add(item) {
    return axios.post("/tasks", item)
}

export function complete(item) {
    item.status = 1
    return axios.put("/tasks", item)
}

export function remove(item) {
    return axios.delete("/tasks/" + item.id)
}
