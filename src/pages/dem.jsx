import React, { useState } from "react";

export default function Dem() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <input type={isVisible ? "text" : "password"}  />
            <button onClick={toggleVisibility}>
                {isVisible ? <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>}
            </button>
        </>
    );
}
