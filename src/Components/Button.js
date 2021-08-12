import React from 'react'
import { Link } from "react-router-dom";

function Button() {
    return (
        <>
            <div className="open-search">
              <Link to="/search"><div>Add a book</div></Link>
            </div>
        </>
    )
}

export default Button
