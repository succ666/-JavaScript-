/**
 * 栈-通过数组实现
 */
class Stack {
    constructor(){
        this.items = [];
    }
    /***
     * 添加一个新元素到栈顶
     * @param element
     * @returns {number}
     */
    push(element){
        return this.items.push(element);
    }
    /***
     * 移除栈顶的元素，同时返回被移除的元素
     * @returns {*}
     */
    pop(){
        return this.items.pop();
    }
    /***
     * 返回栈顶的元素，不对栈做任何修改
     * @returns {*}
     */
    peek(){
        return this.items[this.items.length - 1];
    }
    /***
     * 判断栈里面有无元素
     * @returns {boolean}
     */
    isEmpty(){
        return this.items.length === 0;
    }
    /***
     * 移除栈里的所有元素
     * @returns {*[]}
     */
    clear(){
        return this.items = []
    }
    /***
     * 返回栈里的元素个数
     * @returns {number}
     */
    size(){
        return this.items.length
    }

    /***
     * 返回栈所有元素
     * @returns {[]}
     */
    get(){
        return this.items
    }
}

var stack = new Stack()
stack.push(1)
stack.push(1)
stack.push(1)

