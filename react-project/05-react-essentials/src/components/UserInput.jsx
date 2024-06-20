import { useState } from "react";

export default function UserInpute() {
    const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 120,
    expectedReturn: 6,
    duration: 10,
});

function handleChange(inputIdentifire, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifire]: newValue
        };
    });
}

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                  <label>Initial Investement</label>
                  <input type="number" required
                    value={userInput.initialInvestment}
                    onChange={(event) => handleChange('initialInvestment', event.target.value)} 
                  />
                </p>
                <p>
                  <label>Annual Investtenent</label>
                  <input type="number" required 
                    value={userInput.annualInvestment}
                    onChange={(event) => handleChange('annualInvestment', event.target.value)} 
                  />
                </p>
            </div>
            <div className="input-group">
                <p>
                  <label>Expected Return</label>
                  <input type="number" required
                     value={userInput.expectedReturn}
                     onChange={(event) => handleChange('expectedReturn', event.target.value)} 
                  />
                </p>
                <p>
                  <label>Duration</label>
                  <input type="number" required
                     value={userInput.duration}
                     onChange={(event) => handleChange('duration', event.target.value)}
                  />
                </p>
            </div>
        </section>
    )
}