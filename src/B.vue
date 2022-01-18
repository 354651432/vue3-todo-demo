<script>
 export default {
     render() {
         return <div class="comp-b"></div>;
     },
 };
</script>

<style scoped>
 .comp-b {
     width: 100px;
     height: 100px;
     /* background: pink; */
     position: relative;
 }
 .comp-b::before {
     position: absolute;
     content: "";
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     border-radius: 50%;
     border: 3px solid transparent;
     border-top-color: #000;
     border-left-color: #000;
     animation: rotate 3s infinite ease-out;
 }

 .comp-b::after {
     position: absolute;
     content: "";
     top: -2px;
     left: -2px;
     right: -2px;
     bottom: -2px;
     border-radius: 50%;
     border: 7px solid transparent;
     border-bottom-color: #fff;
     border-right-color: #fff;
     animation: rotate 4s infinite ease-in-out;
 }

 @keyframes rotate {
     100% {
         transform: rotate(360deg);
     }
 }
</style>
