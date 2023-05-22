const Paragraph = ({compStyle, text, spacing}) => {
    return(
        <div style={compStyle}>
            <p style={{letterSpacing: spacing}}>{text}</p>
        </div> 
    );
};
export default Paragraph;