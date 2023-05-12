import './Components.scss'

function Button({
  text,
  type,
  onClick,
  disabled
}) {
  return (
    <button className='button' onClick={onClick} type={type} disabled={disabled}>{text}</button>
  );
}

export default Button;
