export default {
    data() {
        return {
            list: [100, 200, 300, 500]
        }
    },
    render() {
        return null
        return <ul onClick={() => {
            console.log("it called")
            this.list.push(99)
        }}>
            {this.list.map(it => <li>{it}</li>)}
        </ul>
    }
}
