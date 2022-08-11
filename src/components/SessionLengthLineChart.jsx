import { LineChart, Line, XAxis, Tooltip } from "recharts";

export default function SessionLengthLineChart() {
  const data = [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 23,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 0,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ];

  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
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
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, left: 50, bottom: 5 }}
    >
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        tickFormatter={formatTick}
      />
      <Tooltip content={<CustomTooltip />} />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="#ff7300"
        dot={false}
      />
    </LineChart>
  );
}
