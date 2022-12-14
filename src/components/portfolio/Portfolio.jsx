import React,{useState} from 'react'
import "./Portfolio.css"
import Menu from "./Menu"


const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updateItems = Menu.filter((curElem) =>{
            return curElem.category === categoryItem;
        })
        setItems(updateItems);
    }

  return (
    <section className="work container section" id='portfolio'>
        <h2 className="section__title">Projects</h2>

        <div className="work__filters">
            <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
            <span className="work__item" onClick={() => filterItem("University")}>University</span>
            <span className="work__item"  onClick={() => filterItem("Intotek")}>Intotek</span>
            <span className="work__item"  onClick={() => filterItem("DA")}>The digital Academy</span>
            {/* <span className="work__item"  onClick={() => filterItem("Design")}>Design</span> */}
        </div>

        <div className="work__container grid">
            {items.map((elem) =>{
                const{ id, image, title, category, description, technologies} = elem;
                return (
                    
                    <div className="work__card" key={id}>
                        <div className="work__thumbnail">
                            <img src={image} alt="" className="work__img" />
                            <div className="work__mask">
                            <h4 className="work__description">{description}</h4>
                            <h4 className="work__technologies">{technologies}</h4>
                            </div>
                        </div>

                        <span className="work__category">{category}</span>
                        <h3 className="work__title">{title}</h3>
                       
                        <a href="#" className="work__button">
                            <i className="icon-link work__button-icon"></i>
                             </a>
                    </div>
                    
                )
            })}
        </div>
    </section>

  )
}

export default Portfolio
