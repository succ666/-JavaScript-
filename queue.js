/***
 * 队列
 */
class Queue{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    /***
     * 向队列尾部添加一个新的项
     * @param element
     */
    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }

    /***
     * 移除队列第一项
     * @returns {undefined|*}
     */
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        let a = this.items
        this.lowestCount++
        return result
    }

    /**
     * 返回队列中第一个元素
     */
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    isEmpty(){
        return this.size() === 0;
    }
    size(){
        return this.count - this.lowestCount;
    }
    clear(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

/**
 * 击鼓传花
 */

function hotPotato(elementsList, num){
    const queue = new Queue();
    const eliminatedList = [];
    for(let i = 0; i < elementsList.length; i++){
        queue.enqueue(elementsList[i]);
    }
    while(queue.size() > 1){
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }
    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    }
}

const names = ['1','2','3','4','5','6'];
const result = hotPotato(names, 7);
console.log(result);
result.eliminated.forEach(name => console.log(`${name}在击鼓传花游戏中被淘汰。`));

console.log(`胜利者${result.winner}`);
