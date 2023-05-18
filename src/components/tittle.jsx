const Tittle = ({tittle = "default", textColor, font}) => {
    return(
        <h1 style={{color: textColor, fontFamily: font}}>{tittle}</h1>
    );
};
export default Tittle;