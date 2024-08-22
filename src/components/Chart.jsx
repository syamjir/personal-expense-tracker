import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

function Chart({ creditAmount, debitAmount, balanceAmount }) {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: creditAmount, label: "Credit" },
            { id: 1, value: balanceAmount, label: "Balance" },
            { id: 2, value: debitAmount, label: "Debits" },
          ],
        },
      ]}
      width={500}
      height={400}
    />
  );
}
export default Chart;
