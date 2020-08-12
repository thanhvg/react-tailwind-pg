import { useEffect, useState } from 'react';

export function createBroadcast(val) {
  const listeners = new Set();
  return function () {
    // XXX is setSate stable accross all renders?
    // yes 
    // https://reactjs.org/docs/hooks-reference.html React guarantees that
    // setState function identity is stable and won’t change on re-renders. This
    // is why it’s safe to omit from the useEffect or useCallback dependency
    // list.
    
    const [state, setSate] = useState(val);
    listeners.add(setSate);
    const setter = (v) => {
      listeners.forEach(it => it(v))
    }
    useEffect(() => () => {
      listeners.delete(setSate);
    }, [])
    return [state, setter];
  }
}
