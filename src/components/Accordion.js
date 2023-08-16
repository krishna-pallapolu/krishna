import React, { useState, useEffect } from "react";

const Accordion = ({ title, content, isOpen }) => {
    const [isOpenState, setIsOpenState] = useState(isOpen);

    useEffect(() => {
        setIsOpenState(isOpen);
    }, [isOpen]);

    const toggleAccordion = () => {
        setIsOpenState(!isOpenState);
    };

    return (
        <div className={`accordion ${isOpenState ? "active" : ""}`}>
            <div className="accordion-header py-3" onClick={toggleAccordion}>
                {title}
            </div>
            {isOpenState && <div className="accordion-content p-3">{content}</div>}
        </div>
    );
};

export default Accordion;