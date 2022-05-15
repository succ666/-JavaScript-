/**
 * 双端队列
 */

class Deque{
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    /**
     * 双端队列前端添加新元素
     * @param element
     */
    addFront(element){
        if(this.isEmpty()){
            this.addBack(element)
        }else{
            this.items[--this.lowestCount] = element
        }
    }
    /***
     * 向队列尾部添加一个新的项
     * @param element
     */
    addBack(element){
        this.items[this.count] = element;
        this.count++;
    }

    /***
     * 移除队列第一项
     * @returns {undefined|*}
     */
    removeFront(){
        if(this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        let a = this.items
        this.lowestCount++
        return result
    }

    removeBack(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count]
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
const deque = new Deque();
console.log(deque.isEmpty ());
deque.addBack( 'John' );
deque.addBack('Jack' );
console.log(deque.toString());
deque.addBack( 'Camila');
console.log(deque.toString());
console.log(deque.size());
console.log(deque.isEmpty());
deque.removeFront();
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
deque.addFront(" John");
console.log(deque.toString());
