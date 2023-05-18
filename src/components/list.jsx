const FeaturesList = ({animal, option1, option2, option3}) => {
    return(
        <div>
            <label for="featuresDropdown">{animal}`s Features</label>
                <select id="featuresDropdown" name="features">
                <option value={option1}>{option1}</option>
                <option value={option2}>{option2}</option>
                <option value={option3}>{option3}</option>
            </select>
        </div>
    );
};
export default FeaturesList;