import React from "react";
import '../Css/Happy.css'

const Happy = () => {


    function display() {
        const name = "guru";
        return name;
    }
    const res = display();
    return (
        <div className="happy">
            <div>
                <p className="para">
                    Hii welcome to my site
                </p>
                <button onClick={display}>Display</button>
                <p>
                    {res}
                </p>
            </div>
        </div>
    )
}

export default Happy;