export const Conjuction = ({compStyle, vool}) => {
    const result = true && vool;
    return(
        <div style={compStyle}>
            <p>The result of the Conjuction is: {result.toString()}</p>
        </div>
    );
};
export const Disyunction = ({compStyle, vool}) => {
    const result = true || vool;
    return(
        <div style={compStyle}>
            <p>The result of the disyunction is: {result.toString()}</p>
        </div>
    );
};
export const Negation = ({compStyle, vool}) => {
    const result = !vool;
    return(
        <div style={compStyle}>
            <p>The state of the negation is: {result.toString()}</p>
        </div>
    );
};
export const Equal = ({compStyle, vool}) => {
    const result = true === vool;
    return(
        <div style={compStyle}>
            <p>is true equal to {vool.toString()}: {result.toString()}</p>
        </div>
    );
};
export const Different = ({compStyle, vool}) => {
    const result = true !== vool;
    return(
        <div style={compStyle}>
            <p>is true Different of {vool.toString()}: {result.toString()}</p>
        </div>
    );
};
export const Greater = ({compStyle, num1}) => {
    const result = 0 > num1;
    return(
        <div style={compStyle}>
            <p>is 0 Greater than {num1}: {result.toString()}</p>
        </div>
    );
};
export const Less = ({compStyle, num1}) => {
    const result = 0 < num1;
    return(
        <div style={compStyle}>
            <p>is 0 Less than {num1}: {result.toString()}</p>
        </div>
    );
};
export const GreaterOrEqual = ({compStyle, num1}) => {
    const result = 0 >= num1;
    return(
        <div style={compStyle}>
            <p>is 0 Greater or equal than {num1}: {result.toString()}</p>
        </div>
    );
};
export const LessOrEqual = ({compStyle, num1}) => {
    const result = 0 <= num1;
    return(
        <div style={compStyle}>
            <p>is 0 Less or equal than {num1}: {result.toString()}</p>
        </div>
    );
};