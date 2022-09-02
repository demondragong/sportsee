import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import PropTypes from "prop-types";

export default function ScoreRadialBarChart({ score }) {

  const data = [
    {
      score: score,
      fill: "#FF0000",
    },
  ];

  return (
    <ResponsiveContainer
      className="card card--square"
      width="30%"
      height="100%"
    >
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="80%"
        outerRadius="80%"
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          dataKey="score"
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          minAngle={0}
          background="white"
          clockWise
          dataKey="score"
          cornerRadius={10}
        />

        <text x="7%" y="24" fill="black" dominantBaseline="central">
          <tspan>Score</tspan>
        </text>

        <text
          x="50%"
          y="40%"
          fill="black"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="26" fontWeight="700" fill="#282D30">
            {data[0].score ? data[0].score * 100 : ''}%
          </tspan>
          <tspan fontSize="16" fontWeight="500" x="50%" dy="30" fill="#74798C">
            de votre
          </tspan>
          <tspan fontSize="16" fontWeight="500" x="50%" dy="20" fill="#74798C">
            objectif
          </tspan>
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

ScoreRadialBarChart.propTypes = {
  score: PropTypes.number.isRequired,
};
