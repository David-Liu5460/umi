import { useState, useEffect } from 'react';

function useLoggingLife(name: string) {
    useEffect(() => {
        console.log(`${name}组件被创建出来了`);

        return () => {
        console.log(`${name}组件被销毁掉了`);
        }
    }, []);
}
export default useLoggingLife;
