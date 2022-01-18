import { ref } from "vue"

export default {
    compactConfig: {
        MODE: 2,
    },
    data() {
        return {
            name: "",
            tasks: []
        }
    },
    methods: {
        add() {
            const item = { name: this.name, status: 0 }
            const ret = this.tasks.push(item)
            console.log("click")
        },
        complete(item) {
            this.tasks.map(it => {
                if (it == item) {
                    it.status = 1
                }
            })
        },
        remove(item) {
            this.tasks = this.tasks.filter(it => it != item)
        }
    },
    render() {
        return <main class="container mt-4 py-3 card">
            <div class="input-group">
                <input class="form-control" type="text" vModel={this.name} />
                <button class="btn btn-outline-primary" onClick={this.add} >add task</button>
            </div>
            <h5 className="mt-3">tasks</h5>
            <ul className="list-group">
                {this.tasks.map(it => <li className="list-group-item d-flex justify-content-between">
                    {it.name}
                    <div className="btn-group btn-group-sm">
                        <button class="btn btn-primary" onClick={this.complete(it)}>complete</button>
                        <button class="btn btn-danger" onClick={this.remove(it)}>delete</button>
                    </div>
                </li>)}
            </ul>
        </main>
    }
}
