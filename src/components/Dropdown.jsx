const { useState } = require("react");


const Dropdown = ({ options, placeHolder }) => {
    const [selected, setSelected] = useState(placeHolder);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>{selected}</button>
            {isOpen && (
                <ul>
                    {options.map(option => (
                        <li key={option} onClick={() => handleSelect(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};