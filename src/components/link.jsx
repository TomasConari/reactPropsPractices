const LinkToSite = ({compStyle, link,tittle,text}) => {
    return(
        <div style={compStyle}>
            <a target="_blank" href={link} title={tittle}>{text}</a>
        </div>
    );
};
export default LinkToSite;