import './FilterCheckBox.css';

function FilterCheckBox({onInputClick}) {

    return (
        <div className="filtercheckbox">
            <label className="filtercheckbox__switch">
                <input type="checkbox" onClick={onInputClick}/>
                <span className="filtercheckbox__slider"></span>
            </label>
            <p className="filtercheckbox__text">Короткометражки</p>
        </div>
    );
}

export default FilterCheckBox;