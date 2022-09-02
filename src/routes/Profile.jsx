import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DailyActivityBarChart from "../components/DailyActivityBarChart";
import IndicatorCard from "../components/IndicatorCard";
import PerformanceRadarChart from "../components/PerformanceRadarChart";
import ScoreRadialBarChart from "../components/ScoreRadialBarChart";
import SessionLengthLineChart from "../components/SessionLengthLineChart";
import formatIndicatorData from "../utils/factories/formatIndicatorData";
import { useSportseeAPI } from "../utils/useSportseeAPI";

export default function Profile() {
  const { userId } = useParams();

  const { response: userData, loading, error } = useSportseeAPI(userId, "");
  const { response: userActivityData } = useSportseeAPI(userId, "activity");
  const { response: userAverageSessionData } = useSportseeAPI(userId, "average-sessions");
  const { response: userPerformanceData } = useSportseeAPI(userId, "performance");

  useEffect(() => {
    document.title = `Sportsee profile | ${userData?.userInfos.firstName || ''} ${userData?.userInfos.lastName || ''}`;
  }, [userData]);

  return (
    <main className="profile-main">
      <section className="greeting">
        <p className="greeting__heading">
          Bonjour{" "}
          <span className="greeting__heading--name">
            {userData?.userInfos.firstName}
          </span>
        </p>
        <p className="greeting__sub">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </section>
      <section className="dashboard">
        <section className="charts">
          <DailyActivityBarChart activityData={userActivityData || { sessions: [] }} />
          <div className="square-charts">
            <SessionLengthLineChart
              sessionLengthData={userAverageSessionData || { sessions: [] }}
            />
            <PerformanceRadarChart
              performanceData={userPerformanceData || []}
            />
            <ScoreRadialBarChart score={userData?.score || 0} />
          </div>
        </section>
        <section className="cards-gallery">
          {Object.keys(userData?.keyData || {}).map((key) => (
            <IndicatorCard
              className="card"
              key={key}
              data={formatIndicatorData(key, userData?.keyData[key])}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
