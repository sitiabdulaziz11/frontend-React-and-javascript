import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment =
      resultsData[0].valueEndOfYear -
      resultsData[0].interest -
      resultsData[0].annualInvestment;

    return (
        <table id='results'>
            <thead>
                <tr>
                   <th>Year</th> 
                   <th>Investment Value</th>
                   <th>Profit (Year)</th>
                   <th>Total Profit</th>
                   <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearData => {
                    const totalProfit = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalProfit;

                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.profit)}</td>
                        <td>{formatter.format(totalProfit)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}