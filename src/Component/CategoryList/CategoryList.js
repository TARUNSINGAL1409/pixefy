import React from 'react' ; 
import Card from '../Card/Card' ; 

const CategoryList = ({categories}) => {
	return( 
       <div>
         {
         	categories.map(categ => {
         		return (
         			 <Card id = {categ.id} name={categ.category} />
                ) ;
         	})
         }
       </div> 
	) ;
}

export default CategoryList ; 