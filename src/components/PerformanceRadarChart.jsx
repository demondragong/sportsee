import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";

export default function PerformanceRadarChart({ performanceData }) {

  return (
    <ResponsiveContainer width={258} height={263}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceData.data}>
        <PolarGrid radialLines={false} />
        <PolarRadiusAxis axisLine={false} tick={false} tickCount={6}/>
        <PolarAngleAxis dataKey="kind" />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
