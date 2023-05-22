export const Sum = ({compStyle, num1, num2}) => {
    const a = {num1};
    const b = {num2};
    const result = a + b;
  
    return(
        <div style={compStyle}>
            <h6>Sum result: {result}</h6>
        </div>
    );
};
export const Res = ({compStyle, num1, num2}) => {
    const a = {num1};
    const b = {num2};
    const result = a - b;
  
    return(
        <div style={compStyle}>
            <h6>result of subtraction: {result}</h6>
        </div>
    );
};
export const Multiplication = ({compStyle, num1, num2}) => {
    const a = {num1};
    const b = {num2};
    const result = a * b;
  
    return(
        <div style={compStyle}>
            <h6>result of Multiplication: {result}</h6>
        </div>
    );
};
export const Division = ({compStyle, num1, num2}) => {
    const a = {num1};
    const b = {num2};
    const result = a / b;
  
    return(
        <div style={compStyle}>
            <h6>result of Division: {result}</h6>
        </div>
    );
};