import { useState } from "react"

function FilterCategoryes() {
    
    const [status, changeStatus] = useState("Popular")
    
    let filter__categoryes = ["Popular", "Novelty", "Featured", "Short films"]
    
    return (
        <div id="categoryes" className="filter__categoryes anchor">
            <div className="filter__categoryes-flex">
                {
                    filter__categoryes.map((categorye, index) => (
                        <div 
                         onClick={() => {changeStatus(categorye)}}
                         className={`filter__categoryes-item ${categorye === status ? 'active-category' : ''}`}
                         key={index}
                         >
                        <p>{categorye}</p>
                        <span></span>
                        </div>
                    ))
                }
            </div>
            <span></span>
        </div>
    )
}

export default FilterCategoryes