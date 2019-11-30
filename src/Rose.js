import React ,{ useState } from 'react';

function Rose() {


    // useState函数为我们解构了一个变量num和一个setNum函数，并且将变量初始值赋值为“0”
    const [num, setNum] = useState(0);
    // 我们在这里读取num的值， 并且每点击一次按钮都会使num+1
    return <button onClick={() => {setNum(num + 1)}}>{num}</button>

}


export default Rose;
