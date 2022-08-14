import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DailyActivityBarChart from "../components/DailyActivityBarChart";
import PerformanceRadarChart from "../components/PerformanceRadarChart";
import ScoreRadialBarChart from "../components/ScoreRadialBarChart";
import SessionLengthLineChart from "../components/SessionLengthLineChart";
import fetchUserData from "../utils/APIFunctions";

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
            <SessionLengthLineChart sessionLengthData={userAverageSessionData} />
            <PerformanceRadarChart performanceData={userPerformanceData} />
            <ScoreRadialBarChart score={userData.todayScore} />
          </div>
        </section>
        <section className="cards">We are the cards</section>
      </section>
    </main>
  );
}
