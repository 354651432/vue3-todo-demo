import { ref } from "vue"

const Status = (props, ctx) => < >
    {props.status == 0 ?
        <button class={props.class} onClick={props.onClick}>complete</button> :
        <span>completed</span>
    }
</>

export default {
    setup() {
        const tasks = ref([])
        const name = ref("")
        const remove = item => () => tasks.value = tasks.value.filter(it => it != item)
        const complete = item => () => item.status = 1
        const add = () => tasks.value.push({ name: name.value, status: 0 })

        return () => <main class="container mt-4 py-3 card">
            <div class="input-group">
                <input class="form-control" type="text" vModel={name.value} />
                <button class="btn btn-outline-primary" onClick={add} >add task</button>
            </div>
            <h5 class="mt-3">tasks</h5>
            <ul class="list-group">
                {tasks.value.map((it, key) => <li class="list-group-item d-flex justify-content-between" key={key}>
                    {it.name}
                    <div class="btn-group btn-group-sm">
                        <Status class="btn btn-primary" status={it.status} onClick={complete(it)}>delete</Status>
                        <button class="btn btn-danger" onClick={remove(it)}>delete</button>
                    </div>
                </li>)}
            </ul>
        </main>
    }
}
