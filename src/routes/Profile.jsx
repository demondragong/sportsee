import PerformanceRadarChart from "../components/PerformanceRadarChart";
import SessionLengthLineChart from "../components/SessionLengthLineChart";

export default function Profile() {
  return (
    <div className="App">
      <h1>Let's play</h1>
      <SessionLengthLineChart />
      <PerformanceRadarChart />
    </div>
  );
}
