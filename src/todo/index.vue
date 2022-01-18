<template>
  <main class="container mt-4 py-3 card">
    <div class="input-group">
      <input class="form-control" type="text" v-model="name" />
      <button class="btn btn-outline-primary" @click="add">add task</button>
    </div>
    <h5 class="mt-3">tasks</h5>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between"
        v-for="(it,key) in tasks"
        :key="key"
      >
        {{it.name}}
        <div class="btn-group btn-group-sm">
          <button class="btn btn-primary" @click="complete(it)">{{it.status==1?"completed":"complete"}}</button>
          <button class="btn btn-danger" @click="remove(it)">delete</button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      tasks: [],
    };
  },
  methods: {
    add() {
      const item = { name: this.name, status: 0 };
      const ret = this.tasks.push(item);
      console.log("click");
    },
    complete(item) {
      this.tasks.map((it) => {
        if (it == item) {
          it.status = 1;
        }
      });
    },
    remove(item) {
      this.tasks = this.tasks.filter((it) => it != item);
    },
  },
};
</script>
