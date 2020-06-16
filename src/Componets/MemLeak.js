const leak = [];
class MemLeak {
    constructor(str) {
        this.str = str;
    }
}
function func1(val) {
    leak.push(val);
}
setInterval(() => {
    let randomData = Math.random().toString();
    func1(new MemLeak(randomData));
}, 10);
