let obj = {
    name : 'tom',
    age : 18,
    gender : '男',
    intro : function(){
        console.log('my name is '+this.name)
    },
    [Symbol.iterator]: function() {
        let i = 0;
        // 获取当前对象的所有属性并形成一个数组
        let keys = Object.keys(this); 
        console.log(keys.length);
        return {
            next: function(){
                return {
                    // 外部每次执行next都能得到数组中的第i个元素
                    value: keys[i++], 
                    // 如果数组的数据已经遍历完则返回true
                    done: i > keys.length 
                }
            }
        }
    }
}