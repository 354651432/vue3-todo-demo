import { ref, TransitionGroup, Transition } from "vue"

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
        const remove = item => () => tasks.value = tasks.value.filter(it => it != item)
        const complete = item => () => item.status = 1
        const add = () => {
            if (name.value != "") {
                tasks.value.push({ name: name.value, status: 0 })
                name.value = ""
            }
        }

        return () => <main class="container mt-4 py-3 card">
            <div class="input-group">
                <input class="form-control" type="text" vModel={name.value} />
                <button class="btn btn-primary" onClick={add} ><i class="fa fa-plus align-middle" /></button>
            </div>
            <h5 class="mt-3">tasks</h5>
            <TransitionGroup class="list-group" enterActiveClass="animated fadeIn" leaveActiveClass="animated fadeOutLeft" tag="ul">
                {tasks.value.map((it, key) =>
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
