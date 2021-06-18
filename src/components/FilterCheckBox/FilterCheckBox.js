import './FilterCheckBox.css';

function FilterCheckBox() {
    return (
        <div className="filtercheckbox">
            <label className="filtercheckbox__switch">
                <input type="checkbox"/>
                <span className="filtercheckbox__slider"></span>
            </label>
            <p className="filtercheckbox__text">Короткометражки</p>
        </div>
    );
}

export default FilterCheckBox;