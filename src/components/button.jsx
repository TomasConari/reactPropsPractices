const Button = ({compStyle, color, text}) => {
    return(
        <div style={compStyle}>
            <button style={{backgroundColor: color}}>{text}</button>
        </div>
    );
};
export default Button;