const CommonRaces = ({compStyle, tittle, el1, el2, el3}) => {
    return(
        <div style={compStyle}>
            <h3>{tittle}'s most common races</h3>
            <ul>
                <li>{el1}</li>
                <li>{el2}</li>
                <li>{el3}</li>
            </ul>
        </div>
    );
};
export default CommonRaces;