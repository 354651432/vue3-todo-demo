<script>
export default {
  render() {
    return (
      <div class="c">
        <svg class="svg" viewBox="25 25 50 50 ">
          <circle fill="none" class="circle" cx="50" cy="50" r="20" />
        </svg>
      </div>
    );
  },
};
</script>

<style scoped>

.svg {
  width: 100px;
  height: 100px;
  animation: rotate 2s linear;
}

.circle {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke: #000;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
</style>
