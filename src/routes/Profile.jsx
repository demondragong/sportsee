import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DailyActivityBarChart from "../components/DailyActivityBarChart";
import IndicatorCard from "../components/IndicatorCard";
import PerformanceRadarChart from "../components/PerformanceRadarChart";
import ScoreRadialBarChart from "../components/ScoreRadialBarChart";
import SessionLengthLineChart from "../components/SessionLengthLineChart";
import fetchUserData from "../utils/APIFunctions";
import indicatorCardData from "../utils/factories/indicatorCardData";
import formattedPerformanceData from "../utils/factories/formattedPerformanceData";
import formattedScoreData from "../utils/factories/scoreData";

export default function Profile() {
  const { userId } = useParams();

  const [userData, setUserData] = useState({});
  const [userActivityData, setUserActivityData] = useState({});
  const [userAverageSessionData, setUserAverageSessionData] = useState({});
  const [userPerformanceData, setUserPerformanceData] = useState({});

  useEffect(() => {
    fetchUserData("", userId, setUserData);
    fetchUserData("activity", userId, setUserActivityData);
    fetchUserData("average-sessions", userId, setUserAverageSessionData);
    fetchUserData("performance", userId, setUserPerformanceData);
  }, []);

  useEffect(() => {
    document.title = `Sportsee profile | ${userData.userInfos?.firstName} ${userData.userInfos?.lastName}`;
  }, [userData]);

  return (
    <main className="profile-main">
      <section>
        <p>Bonjour {userData.userInfos?.firstName}</p>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section className="dashboard">
        <section className="charts">
          <DailyActivityBarChart activityData={userActivityData} />
          <div className="square-charts">
            <SessionLengthLineChart
              sessionLengthData={userAverageSessionData}
            />
            <PerformanceRadarChart performanceData={ formattedPerformanceData(userPerformanceData) } />
            {/* <ScoreRadialBarChart score={userData.todayScore} /> */}
            <ScoreRadialBarChart data={formattedScoreData(userData)} />
          </div>
        </section>
        <section className="cards-gallery">
          {Object.keys(userData.keyData || {}).map((key) => (
            <IndicatorCard className="card" key={key} data={indicatorCardData(key, userData.keyData[key])} />
          ))}
        </section>
      </section>
    </main>
  );
}
