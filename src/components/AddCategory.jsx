import { useState } from 'react'

const AddCategory = ({onNewCategory}) => {

const [inputValue, setinputValue] = useState('');

const onInputChange = ({target})=>{
       
        setinputValue(target.value)
}

const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <=1) return;
    onNewCategory(inputValue.trim())
    setinputValue('')
}
  return (
    <form  onSubmit = { onSubmit }>
            <input type="text" 
           placeholder='Buscar Gif' 
           value = {inputValue}
           onChange={  onInputChange} />

    </form>
    
  )
}

export default AddCategory;