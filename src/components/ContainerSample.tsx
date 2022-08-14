import React from 'react'

// 型定義
type ContainerProps = {
    title: string
    children: React.ReactNode
}

// Containerは赤背景のボックスの中にタイトルと子要素を表示する
// 戻り値の型つけJSX.Element
const Container = (props: ContainerProps): JSX.Element => {
    const { title, children } = props

    return (
        <div style={{ background: 'red' }}>
            <span>{title}</span>
            {/* propsのchildrenを埋め込むとこのコンポーネントの開始タグと閉じタグで囲んだ要素を表示する */}
            <div>{children}</div>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return (
        // Containerを使用する際に、他の要素を囲って使用ｓうる
        <Container title="Hello">
            <p>ここの部分が背景色で囲まれる</p>
        </Container>
    )
}

export default Parent