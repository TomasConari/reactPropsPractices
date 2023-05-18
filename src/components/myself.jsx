const Myself = () => {
    const data = {
        img: "https://avatars.githubusercontent.com/u/124695663?v=4",
        name: "Tomas",
        lastname : "Contreras",
        text: "I`m 18 years old, i like programming and I`m currently learning react"
    };
    return(
        <div>
            <img src={data.img} width="20%" height="20%" alt="Github Profile Picture"></img>
            <h1>{data.name} {data.lastname}</h1>
            <p>{data.text}</p>
        </div>
    );
};
export default Myself