import Button from "./Button";
const RecommandationList = () => {

    const suggestedContent = ["All", "Javascript", "Computer Science", "Programming", "Data Structure", "frontend development","J Krishnamurty", "Osho", "Achrya Prashant", "Peepal Farm", "Nature", "Physics", "Technology"];
    return(
        <div className="recomnd_count">
            {suggestedContent.map((elem, index) => <Button key={index}name={elem} />)}
        </div>
    )
}

export default RecommandationList;