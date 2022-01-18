<script>
import HelloWorld from "./components/HelloWorld.vue";
import A from "./A.vue";
import B from "./B.vue";
import C from "./C.vue";
import D from "./D.vue";
import Todo from "./todo/index.vue";
import "bootstrap/dist/css/bootstrap.css";
import Demo from "./demo"

export default {
  name: "App",
  render() {
    return (
      <>
        <Todo />
        <Demo />
      </>
    );
  },
};
</script>
