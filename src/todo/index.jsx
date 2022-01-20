import { ref, TransitionGroup, Transition, computed, onMounted } from "vue"
import * as api from "../api.js"

const Status = (props, ctx) => < >
    <Transition enterActiveClass="animated fadeIn" mode="out-in">
        {props.status == 0 ?
            <button class={props.class} onClick={props.onClick}><i class="fa fa-toggle-on"></i></button> :
            <i class="fa fa-check-circle mr-3 text-success"></i>
        }
    </Transition>
</>

export default {
    name: "todo",
    setup() {
        const tasks = ref([])
        const name = ref("")
        const showType = ref(0)
        const remove = item => async () => {
            await api.remove(item)
            load()
        }

        const complete = item => async () => {
            await api.complete(item)
            load()
        }

        const add = async () => {
            if (name.value != "") {
                await api.add({ name: name.value, status: 0 })
                name.value = ""
                load()
            }
        }
        const load = async () => {
            tasks.value = await api.list()
        }
        onMounted(load)

        const filteredTasks = computed(() =>
            tasks.value.filter(it => {
                if (showType.value == 0) {
                    return true
                }

                return it.status == 0
            }))

        return () => <main class="container mt-4 py-3 card">
            <div class="input-group">
                <input class="form-control" type="text" vModel={name.value} />
                <button class="btn btn-primary" onClick={add} ><i class="fa fa-plus align-middle" /></button>
            </div>
            <div class="mt-3 d-flex justify-content-between">
                <h5>tasks</h5>
                <label>
                    <input type="checkbox" class="form-check-input" checked={showType.value == 0} onInput={(arg) => {
                        showType.value = !arg.target.checked * 1
                    }} />show all</label>
            </div>
            <TransitionGroup class="list-group" enterActiveClass="animated fadeIn" leaveActiveClass="animated fadeOutLeft" tag="ul">
                {filteredTasks.value.map((it, key) =>
                    <li class="list-group-item d-flex justify-content-between" key={key}>
                        {it.name}
                        <div class="btn-group btn-group-sm d-flex align-items-center">
                            <Status class="btn btn-outline-primary" status={it.status} onClick={complete(it)}></Status>
                            <button class="btn btn-outline-danger" onClick={remove(it)}><i class="fa fa-trash"></i></button>
                        </div>
                    </li>
                )}
            </TransitionGroup>
        </main >
    }
}
