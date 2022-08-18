import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function SessionLengthLineChart({ sessionLengthData }) {
  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div>
          <span>{`${payload[0].value} min`}</span>
        </div>
      );
    }
    return null;
  }

  function formatTick(dayNumber) {
    let dayLetter = "";
    switch (dayNumber) {
      case 1:
        dayLetter = "L";
        break;
      case 2:
        dayLetter = "M";
        break;
      case 3:
        dayLetter = "M";
        break;
      case 4:
        dayLetter = "J";
        break;
      case 5:
        dayLetter = "V";
        break;
      case 6:
        dayLetter = "S";
        break;
      case 7:
        dayLetter = "D";
        break;

      default:
        break;
    }
    return dayLetter;
  }

  return (
    <ResponsiveContainer
      className="card card--square card--red"
      width="30%"
      height="100%"
    >
      <LineChart
        width="30%"
        height="100%"
        data={sessionLengthData.sessions}
        margin={{ top: 40, right: 10, left: 10, bottom: 5 }}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tick={{ fontSize: 12, fill: "white", fillOpacity: 0.5 }}
          tickLine={false}
          tickFormatter={formatTick}
        />
        <Tooltip content={<CustomTooltip />} 
        wrapperStyle={{ fontSize: 14, padding: 10, color: "#000", backgroundColor: "#FFFFFF" }}/>
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          strokeWidth={2}
          dot={false}
        />
        <text
          x={10}
          y={20}
          fontSize="15"
          fill="white"
          fillOpacity="0.5"
          dominantBaseline="central"
        >
          <tspan x="20">Durée moyenne des </tspan>
          <tspan x="20" dy="24">sessions</tspan>
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
}
