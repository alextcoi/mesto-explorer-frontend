import './Popup.css';

function Popup({ status }) {
  let openClass;
  status ? (openClass = "popup_opened") : (openClass = "");

  return (
    <div className={`popup ${openClass}`}>
      <div className='popup__text'>Успешно!</div>
    </div>
  );
}

export default Popup;
