import { useState } from 'react'


function NavBar({handleClickNext, handleClickPrevious}) {



    return (<>
        <button onClick={handleClickPrevious}>précédent</button>
        <button onClick={handleClickNext} >suivant</button>
    </>
    )
}



export default NavBar;