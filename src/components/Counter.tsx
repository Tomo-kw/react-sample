import { useState } from 'react'

type CounterProps = {
    initialValue: number
}

const Counter = (props: CounterProps) => {
    const { initialValue } = props
    // カウントが保持する1つの状態をuseState()で宣言。引数に初期値を指定
    // countが現在の状態、setCountカウントが状態を更新する関数
    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            {/* setCountを呼ぶことで状態を更新 */}
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        </div>
    )
}

export default Counter