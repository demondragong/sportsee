import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";
import PropTypes from "prop-types";

export default function PerformanceRadarChart({ performanceData }) {
  return (
    <ResponsiveContainer
      className="card card--square card--black"
      width="30%"
      height="100%"
    >
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="60%"
        data={performanceData}
        startAngle={-150}
        endAngle={210}
      >
        <PolarGrid radialLines={false} />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 150]}
          axisLine={false}
          tick={false}
          tickCount={6}
        />
        <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} />
        <Radar name="Mike" dataKey="value" fill="#FF0000" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

PerformanceRadarChart.propTypes = {
  performanceData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
