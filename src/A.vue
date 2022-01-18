<script>
export default {
  render() {
    return <div class="loading1"></div>;
  },
};
</script>
<style scoped>
.loading1 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top: 2px solid #000;
  border-left: 2px solid #000;

  animation: doit 3s infinite linear;
}

@keyframes doit {
  100% {
    transform: rotate(360deg);
  }
}
</style>
