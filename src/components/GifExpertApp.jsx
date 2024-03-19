import { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp= () => {

 const [categories, setCategories] = useState([]);

 const onAddCategory = (newCategory)=>{
   if (categories.find(category => category.toLowerCase() === newCategory.toLowerCase())) return;

    setCategories([...categories, newCategory]);
 }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory  onNewCategory={(value) => onAddCategory(value)}/>
   
        {
            categories.map( category => <GifGrid key={category} category={category} />)
        }
        
    </>
    
  )
}

export default GifExpertApp