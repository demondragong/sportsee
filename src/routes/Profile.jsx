import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DailyActivityBarChart from "../components/DailyActivityBarChart";
import IndicatorCard from "../components/IndicatorCard";
import PerformanceRadarChart from "../components/PerformanceRadarChart";
import ScoreRadialBarChart from "../components/ScoreRadialBarChart";
import SessionLengthLineChart from "../components/SessionLengthLineChart";
import fetchUserData from "../utils/APIFunctions";
import formattedIndicatorData from "../utils/factories/formattedIndicatorData";
import formattedPerformanceData from "../utils/factories/formattedPerformanceData";
import formattedScoreData from "../utils/factories/formattedScoreData";

export default function Profile() {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const [userActivityData, setUserActivityData] = useState({ sessions: [] });
  const [userAverageSessionData, setUserAverageSessionData] = useState({ sessions: [] });
  const [userPerformanceData, setUserPerformanceData] = useState({});

  useEffect(() => {
    let mock = true
    fetchUserData(mock, "", userId, setUserData);
    fetchUserData(mock, "activity", userId, setUserActivityData);
    fetchUserData(mock, "average-sessions", userId, setUserAverageSessionData);
    fetchUserData(mock, "performance", userId, setUserPerformanceData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.title = `Sportsee profile | ${userData.userInfos?.firstName || ''} ${userData.userInfos?.lastName || ''}`;
  }, [userData]);

  return (
    <main className="profile-main">
      <section className="greeting">
        <p className="greeting__heading">
          Bonjour{" "}
          <span className="greeting__heading--name">
            {userData.userInfos?.firstName}
          </span>
        </p>
        <p className="greeting__sub">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </section>
      <section className="dashboard">
        <section className="charts">
          <DailyActivityBarChart activityData={userActivityData} />
          <div className="square-charts">
            <SessionLengthLineChart
              sessionLengthData={userAverageSessionData}
            />
            <PerformanceRadarChart
              performanceData={
                formattedPerformanceData(userPerformanceData) || []
              }
            />
            <ScoreRadialBarChart data={formattedScoreData(userData)} />
          </div>
        </section>
        <section className="cards-gallery">
          {Object.keys(userData.keyData || {}).map((key) => (
            <IndicatorCard
              className="card"
              key={key}
              data={formattedIndicatorData(key, userData.keyData[key])}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
