import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";

export default function PerformanceRadarChart() {
  const data = [
    {
        value: 200,
        kind: 1
    },
    {
        value: 240,
        kind: 2
    },
    {
        value: 80,
        kind: 3
    },
    {
        value: 80,
        kind: 4
    },
    {
        value: 220,
        kind: 5
    },
    {
        value: 110,
        kind: 6
    }
]

  return (
    <ResponsiveContainer width={400} height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
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
