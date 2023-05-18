const Paragraph = ({text, spacing}) => {
    return(
        <p style={{letterSpacing: spacing}}>{text}</p> 
    )
};
export default Paragraph;