export const ArrayBiggestElement = ({compStyle, arr}) =>{
    return(
        <div style={compStyle}>
            <p>In the array: {arr.join(" ")} the biggest element is: {Math.max(...arr)}</p>
        </div>
    );
};
export const ArraySmallestElement = ({compStyle, arr}) =>{
    return(
        <div style={compStyle}>
            <p>In the array: {arr.join(" ")} the smallest element is: {Math.min(...arr)}</p>
        </div>
    );
};
export const SquareRoot = ({compStyle, num}) =>{
    return(
        <div style={compStyle}>
            <p>The square root of {num} is {Math.sqrt(num)}</p>
        </div>
    );
};
export const AbsoluteValue = ({compStyle, num}) =>{
    const negative = (num - (num*2));
    return(
        <div style={compStyle}>
            <p>The absolute value of {negative} is {Math.abs(negative)}</p>
        </div>
    );
};
export const Round = ({compStyle, num}) =>{
    const decimal = num + 0.6;
    return(
        <div style={compStyle}>
            <p>The absolute value of {decimal} is {Math.round(decimal)}</p>
        </div>
    );
};
export const Exponentiation = ({compStyle, num}) =>{
    return(
        <div style={compStyle}>
            <p>The exponentiation value of {num} with the exponent {num + 5} is {Math.pow(num, num + 5)}</p>
        </div>
    );
};
export const MaxValue = ({compStyle, num}) =>{
    return(
        <div style={compStyle}>
            <p> the max value of {num} and {num + 6} is {Math.max(num, num + 6)}</p>
        </div>
    );
};
export const MinValue = ({compStyle, num}) =>{
    return(
        <div style={compStyle}>
            <p> the min value of {num} and {num + 6} is {Math.min(num, num + 6)}</p>
        </div>
    );
};