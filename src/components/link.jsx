const LinkToSite = ({link,tittle,text}) => {
    return(
        <a target="_blank" href={link} title={tittle}>{text}</a>
    );
};
export default LinkToSite;