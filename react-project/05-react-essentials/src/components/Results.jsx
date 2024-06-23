import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
    const resultsdata = calculateInvestmentResults(input);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].annualInvestment

    return (
        <table id='results'>
            <thead>
                <tr>
                   <th>Year</th> 
                   <th>Investment Value</th>
                   <th>Profit (year)</th>
                   <th>Total Profit</th>
                   <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsdata.map(yearData => {
                    const totalProfit = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;

                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.profit)}</td>
                        <td>{formatter.format(totalProfit)}</td>
                        <td></td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}