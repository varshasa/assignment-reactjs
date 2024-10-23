import React from 'react' ;
import Card from './Card' ;
import img1 from '../images/bridal.jpg' ;
import img2 from '../images/casuals.jpg' ;
import img3 from '../images/formals.jpg' ;
import img4 from '../images/frock.jpg' ;
import img5 from '../images/gown.jpg' ;
import img6 from '../images/salwar.jpg' ;
import img7 from '../images/saree.jpg' ;
import img8 from '../images/suits.jpg' ;
import img9 from '../images/tshirt.jpg' ;

function MainPage() {
  return (
    <>
    <div className='cardComp'>
     <Card caption="Bridal Lehangas" price="Rs 12000.00" img={img1}/>
     <Card caption="Casuals" price="Rs 450.00" img={img2}/>
     <Card caption="Formals" price="Rs 650.00" img={img3}/>
     <Card caption="Frocks" price="Rs 800.00" img={img4}/>
     <Card caption="Gowns" price="Rs 2999.00" img={img5}/>
     <Card caption="Salwars" price="Rs 1999.00" img={img6}/>
     <Card caption="Sarees" price="Rs 550.00" img={img7}/>
     <Card caption="Suits" price="Rs 999.00" img={img8}/>
     <Card caption="T-Shirts" price="Rs 299.00" img={img9}/>
     </div>
    </>
   
  )
}

export default MainPage