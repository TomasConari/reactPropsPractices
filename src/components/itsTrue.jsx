const ItsTrue = ({compStyle, backColor, text}) => {
    return(
        <div style={compStyle}>
            <h2 style={{backgroundColor: backColor}}>{text}</h2>
        </div>
    );
};
export default ItsTrue;