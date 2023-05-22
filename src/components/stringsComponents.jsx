export const Concat = ({compStyle, str1, str2}) =>{
    return(
        <div style={compStyle}>
            <p>{str1} {str2}</p>
        </div>
    )
};
export const StringLength = ({compStyle, str}) =>{
    return(
        <div style={compStyle}>
            <p>The string Length is: {str.length}</p>
        </div>
    );
};