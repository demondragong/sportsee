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
import PropTypes from "prop-types";

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

function LegendFormatter(value, entry) {
  return (
    <span style={{ color: "#74798C" }}>
      {value === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)"}
    </span>
  );
}

export default function DailyActivityBarChart({ activityData }) {
  return (
    <ResponsiveContainer className="card" width="100%" height="50%">
      <BarChart
        data={activityData?.sessions}
        margin={{
          top: 23,
          right: 45,
          left: 45,
          bottom: 5,
        }}
      >
        <text
          x={120}
          y={30}
          fill="black"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="16">Activité quotidienne</tspan>
        </text>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={16}
          tickFormatter={(date) => (date ? parseInt(date.slice(-2)) : "")}
        />
        <YAxis
          orientation="right"
          axisLine={false}
          tickLine={false}
          tickMargin={45}
        />
        <Tooltip
          content={<CustomTooltip />}
          itemStyle={{ margin: "auto" }}
          wrapperStyle={{
            fontSize: 14,
            padding: 10,
            color: "#FFFFFF",
            backgroundColor: "#E60000",
          }}
        />
        <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          formatter={LegendFormatter}
          wrapperStyle={{
            paddingBottom: "48px",
          }}
        />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

DailyActivityBarChart.propTypes = {
  activityData: PropTypes.shape({
    sessions: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};
