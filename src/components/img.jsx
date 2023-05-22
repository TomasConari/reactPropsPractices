const AnimalImage = ({compStyle, width, height, src}) =>{
    return(
        <div style={compStyle}>
            <img src={src} width={width} height={height}/>
        </div>
    );
};
export default AnimalImage