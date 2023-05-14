// import React, {useState, useMemo} from 'react';

// function calcNumber(count) {
//   console.log("calcNumber重新计算");
//   let total = 0;
//   for (let i = 1; i <= count; i++) {
//     total += i;
//   }
//   return total;
// }

// export default function MemoHookDemo01() {
//   const [count, setCount] = useState(10);
//   const [show, setShow] = useState(true);

//   // const total = calcNumber(count); // 对数组/对象等的优化
//   const total = useMemo(() => {
//     return calcNumber(count);
//   }, [count]);

//   return (
//     <div>
//       <h2>计算数字的和: {total}</h2>
//       <button onClick={e => setCount(count + 1)}>+1</button>
//       <button onClick={e => setShow(!show)}>show切换</button>
//     </div>
//   )
// }


import React, { useState, memo, useMemo } from 'react';

const HYInfo = memo((props) => {
  console.log("HYInfo重新渲染");
  return <h2>名字: {props.info.name} 年龄: {props.info.age}</h2>
});

export default function MemoHookDemo02() {
  console.log("MemoHookDemo02重新渲染");
  const [show, setShow] = useState(true);

  // const info = { name: "why", age: 18 };
  const info = useMemo(() => {
    return { name: "why", age: 18 };
  }, []);

  return (
    <div>
      <HYInfo info={info} />
      <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  )
}
