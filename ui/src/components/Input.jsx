import { useState } from "react";
import "./Input.css";

const Input = ({ closeUI, data }) => {
    const [inputValue, setInputValue] = useState("");

    const handleConfirm = () => {
        closeUI({ value: inputValue });
    };

    const handleCancel = () => {
        closeUI();
    };

    return (
        <div className="InputModal">
            <div className="InputContainer">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={data.PlaceholderText}
                />
                <div className="ButtonContainer">
                    <button onClick={handleConfirm}>Confirm</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Input;
