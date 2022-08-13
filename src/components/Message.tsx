// 無名関数でコンポーネント定義
// Textコンポーネントは親から’content’というデータを受け取る
const Text = (props: {content: string}) => {
    const { content } = props
    return <p className="text">{content}</p>
}

// Textコンポーネント同様にMessageへ代入
const Message = (props: {}) => {
    const content1 = 'This is parent component'
    const content2 = 'Message uses Text component'

    return (
        <div>
            <Text content={content1} />
            <Text content={content2} />
        </div>
    )
}

export default Message