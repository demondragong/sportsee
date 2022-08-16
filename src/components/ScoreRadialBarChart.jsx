import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

export default function ScoreRadialBarChart({ data }) {
  return (
    <ResponsiveContainer className="card card--square" width="30%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="80%"
        outerRadius="80%"
        barSize={10}
        data={data}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          dataKey="score"
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          minAngle={15}
          label={{ position: "center", fill: "#FF0000" }}
          background
          clockWise
          dataKey="score"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
