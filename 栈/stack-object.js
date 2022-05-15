/**
 * 栈-通过对象实现
 */
const _items = Symbol('stackItems')
const _count = Symbol('count')
class Stack{
    constructor(){
        this[_count] = 0;
        this[_items] = {};
    }
    /***
     * 添加一个新元素到栈顶
     * @param element
     * @returns {number}
     */
    push(element){
        this[_items][this[_count]] = element;
        this[_count]++;
    }
    /***
     * 移除栈顶的元素，同时返回被移除的元素
     * @returns {*}
     */
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this[_count]--;
        const result = this[_items][this[_count]];
        delete this[_items][this[_count]]
        return result
    }
    /***
     * 返回栈顶的元素，不对栈做任何修改
     * @returns {*}
     */
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this[_items][this[_count] - 1];
    }
    /***
     * 判断栈里面有无元素
     * @returns {boolean}
     */
    isEmpty(){
        return this[_count] === 0;
    }
    /***
     * 移除栈里的所有元素
     */
    clear(){
        this[_items] = {};
    }
    /***
     * 返回栈里的元素个数
     * @returns {number}
     */
    size(){
        return this[_count];
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this[_items][0]}`;
        for (let i = 1; i < this[_count]; i++){
            objString = `${objString},${this[_items][i]}`;
        }
        return objString;
    }

    /***
     * 返回栈所有元素
     * @returns {[]}
     */
    get(){
        if(this.isEmpty()){
            return undefined;
        }
        return this[_items]
    }
}

const stack = new Stack();
stack.push(1)
console.log(stack.get());
