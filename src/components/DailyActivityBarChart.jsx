import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}kg`}</p>
          <p className="label">{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
    return null;
  }

export default function DailyActivityBarChart({ activityData }) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        width={700}
        height={145}
        data={activityData?.sessions}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin = {16}
          // tickFormatter={(date) => parseInt(date.slice(-2))}
        />
        <YAxis orientation="right" axisLine={false} tickLine={false} tickMargin = {45}/>
        <Tooltip content={<CustomTooltip />} />
        <Legend align="right" verticalAlign="top"/>
        <Bar dataKey="kilogram" fill="#282D30" />
        <Bar dataKey="calories" fill="#E60000" />
      </BarChart>
    </ResponsiveContainer>
  );
}
