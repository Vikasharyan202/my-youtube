
const ChatMessage = ({name, message}) => {
    
    return(
        <div className="chatMessage_count">
            <img src="https://yt3.ggpht.com/n8PbolmNC4QpF0HRsPpFSe2LPGSp_lLtzmWRXnWEitGBat-WaGin3WnJFjluYRnb6cp2QYF-=s48-c-k-c0x00ffffff-no-rj" />
            <span className="chatName">{name}</span>
            <span>{message}</span>
        </div>
    )
}
export default ChatMessage;