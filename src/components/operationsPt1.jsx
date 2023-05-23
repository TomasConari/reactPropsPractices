export const Sum = ({compStyle, num}) => {
    return(
        <div style={compStyle}>
            <h6>Sum result: {num + (num + 5)}</h6>
        </div>
    );
};
export const Res = ({compStyle, num}) => {
    return(
        <div style={compStyle}>
            <h6>result of subtraction: {num - (num + 5)}</h6>
        </div>
    );
};
export const Multiplication = ({compStyle, num}) => {
    return(
        <div style={compStyle}>
            <h6>result of Multiplication: {num * (num + 5)}</h6>
        </div>
    );
};
export const Division = ({compStyle, num}) => {
    return(
        <div style={compStyle}>
            <h6>result of Division: {num / (num + 5)}</h6>
        </div>
    );
};