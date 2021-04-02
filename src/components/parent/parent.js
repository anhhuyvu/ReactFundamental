import Child from "../child/child"

const Parent = () => {
    const messageList = ['A', 'B']
    const actionList = (message) => {
        console.log(message)
    }

    return (
        <div>
            <Child messages={messageList}
                onClickMessage={actionList} />
        </div>
    )
}

export default Parent;