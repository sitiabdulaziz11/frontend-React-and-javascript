
// export default function UserInpute({ onChangeInput, Inputuser }) {
//     return (
//         <section id="user-input">
//             <div className="input-group">
//                 <p>
//                   <label>Initial Investement</label>
//                   <input type="number" required
//                     value={Inputuser.initialInvestment}
//                     onChange={(event) => onChangeInput('initialInvestment', event.target.value)} 
//                   />
//                 </p>
//                 <p>
//                   <label>Annual Investtenent</label>
//                   <input type="number" required 
//                     value={Inputuser.annualInvestment}
//                     onChange={(event) => onChangeInput('annualInvestment', event.target.value)} 
//                   />
//                 </p>
//             </div>
//             <div className="input-group">
//                 <p>
//                   <label>Expected Return</label>
//                   <input type="number" required
//                      value={Inputuser.expectedReturn}
//                      onChange={(event) => onChangeInput('expectedReturn', event.target.value)} 
//                   />
//                 </p>
//                 <p>
//                   <label>Duration</label>
//                   <input type="number" required
//                      value={Inputuser.duration}
//                      onChange={(event) => onChangeInput('duration', event.target.value)}
//                   />
//                 </p>
//             </div>
//         </section>
//     )
// }

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange('annualInvestment', event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange('expectedReturn', event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
