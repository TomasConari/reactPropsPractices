export const Even = ({compStyle, num}) =>{
    const even = num % 2 === 0;
    return(
        <div style={compStyle}>
            <p>{num} is {even === true ? "even" : "odd"}</p>
        </div>
    );
};