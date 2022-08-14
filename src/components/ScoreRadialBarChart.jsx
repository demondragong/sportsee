import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

export default function ScoreRadialBarChart({ score }) {

  const data = [
    {
      score: score,
    },
  ];


  return (
    <ResponsiveContainer width={258} height={263}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="80%"
        outerRadius="80%"
        barSize={10}
        data={data}
      >
         <PolarAngleAxis type="number" domain={[0, 1]} dataKey={"score"} angleAxisId={0} tick={false} />
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
