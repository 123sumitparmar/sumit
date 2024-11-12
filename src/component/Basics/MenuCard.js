import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData)
    return (

        <div>
            <section className='main-card--cointainer'>
                {menuData.map((curElem) => {
                    return (
                        <>
                            <div className="card-container" key={curElem.id}>
                                <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{curElem.id}</span>
                                    <span className='card-author subtle'>Breakfast</span>
                                    <h2 className='card-title'>{curElem.name}</h2>
                                    <span className="card-description subtle">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim provident unde at nam nemo aspernatur.
                                    </span>
                                    <div className="card-read">Read</div>
                                </div>
                                <div>
                                    <img src={curElem.image} alt="images" className='card-media' />
                                    <span className='card-tag subtle'>Order Now</span>

                                </div>
                            </div>
                        </div >
    
                
                </>

            )
        }) }
        </section>
      
    </div >

  )
}
export default MenuCard
