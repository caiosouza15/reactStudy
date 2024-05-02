import './style.css';

export const TextInput = ({searchValue, handleChange}) => {
    return(
        <input
        className=''
        type='search'
        onChange={handleChange}
        value={searchValue}
      />
    )
}