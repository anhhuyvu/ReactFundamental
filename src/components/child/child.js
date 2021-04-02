

const Child = (props) => {
    const { messages, onClickMessage } = props

    const handleMessage = (message) => {
        if (onClickMessage) {
            onClickMessage(message)
        }
    }
    return (
        <ul>
            {messages.length > 0 && messages.map((message, index) => (
                <p key={index}
                onClick={() => handleMessage(message)}>{message}</p>
            ))}
        </ul>
    )
}

export default Child