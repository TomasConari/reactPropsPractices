const Tittle = ({compStyle, tittle, textColor, font}) => {
    return(
        <div style={compStyle}>
            <h1 style={{color: textColor, fontFamily: font}}>{tittle}</h1>
        </div>
    );
};
export default Tittle;