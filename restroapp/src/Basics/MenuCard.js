import React from 'react';

const MenuCard = ({mData}) => {
  return (
      <>
      <section className='main-card--cointainer'>

      {
          mData.map((curElem)=>{
              return(
                <>
                
                <div className="card-container" key={curElem.id}>
                <div className="card-body">
                <span className='card-number card-circle subtle'>{curElem.id}</span>
                <span className= "card-author subtle">{curElem.Author}</span>
                <h2 className = "card-title">{curElem.title}</h2>
                <span className= "card-description subtle">
                    {curElem.description}
                    </span>
                    <div className = "card-read">Read</div>
                <img src={curElem.image} alt="image" className="card-media"/>

                <span className ="card-tag  subtle">Order Now</span>

                </div> 
            </div>
                </>
              )
          })
      }
            </section>

 </>
      

  );
};

export default MenuCard;
