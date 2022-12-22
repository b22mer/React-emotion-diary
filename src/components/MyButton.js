const MyButton=({text, type, onClick})=>{
    // 이상한 타입을 걸러내는
    const btnType=["positive", "negative"].includes(type)? type: "default";
    return(
        <button className={["MyButton",`MyButton_${btnType}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    )
}

MyButton.defautProps={
    type: "default",
}


export default MyButton