import './Components.scss'

function Input({
  type,
  placeholder,
  value,
  name,
  accept,
  required,
  onChange,
  pattern,
  title,
  disabled,
  style
}) {
  return (
    <div className='input'>
      <input type={type} placeholder={placeholder} value={value} name={name} accept={accept} required={required} pattern={pattern} onChange={onChange} title={title} disabled={disabled} style={style}/>
    </div>
  );
}

export default Input;
