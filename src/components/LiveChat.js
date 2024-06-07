import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomName, randomText } from "../utils/helper";

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const chatMessage = useSelector((store) => store.chat.message);

    useEffect(() => {
        const timer = setInterval(() => {
            // console.log("api polling");

            dispatch(
                addMessage({
                    name: randomName(),
                    message: randomText(25),
                })
            )
        }, 2000);

        return () => clearInterval(timer);
    }, [])
    
    return(
        <div className="liveChat">
        <div className="">
            {chatMessage.map((chat, index) => <ChatMessage 
            key={index}
            name={chat.name}
            message={chat.message}
            />)}
            
        </div>
        <form className="chat_input" onSubmit={(e) => {
            e.preventDefault();
            dispatch(
                addMessage({
                    name: "Vikash Aryan",
                    message: liveMessage,
                })
            )
            setLiveMessage("");
            }}>
            <input type="text" value={liveMessage} onChange={(e) => {
                setLiveMessage(e.target.value);
            }} />
            <button >Submit</button>
        </form>
        </div>
        
    )
}
export default LiveChat;