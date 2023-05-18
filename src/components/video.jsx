const CatDogVideo = ({borders, source}) => {
    return(
        <iframe style={{border: borders}} width="560" height="315" src={source} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    );
};
export default CatDogVideo;