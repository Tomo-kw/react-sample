const Hello = () => {
    const onClick = () => {
        alert('hello')
    }

    const text = 'Hello, React'

    return (
        // クリック時コールバック関数を渡す
        <div onClick={onClick}>
            {text}
        </div>
    )

}

export default Hello
