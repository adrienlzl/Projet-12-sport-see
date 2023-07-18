// import React, {useEffect, useState} from 'react';
// import "../css/Profile.scss"
// import Header from "../components/Header/Header"
// import MenuLeft from "../components/MenuLeft/MenuLeft";
// import Firstname from "../components/Firstname/Firstname";
// import DailyActivityChart from "../components/DailyActivityChart/DailyActivityChart";
// import SimpleLineChart from "../components/SimpleLineChart/SimpleLineChart";
// import SimpleRadarChart from "../components/SimpleRadarChart/SimpleRadarChart";
// import MyDoughnutChart from "../components/SimpleRadialBarChart/MyDoughnutChart";
// import KeyData from "../components/Keydata/Keydata";
// import {useParams} from "react-router-dom";
//
//
//
// function ProfilePage() {
//     const params = useParams();
//     const id = parseInt(params.id, 10);
//     const userData = await userDataResponse.json();
//     const performance = await performanceDataResponse.json();
//     const activity = await activityDataResponse.json();
//     const averageSessions = await averageSessionsDataResponse.json();
//     const [userData, setUserData] = useState(null);
//     const [performance, setPerformanceData] = useState(null);
//     const [activity, setActivityData] = useState(null);
//     const [averageSessions, setAverageSessionsData] = useState(null);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // const [userDataResponse, performanceDataResponse,
//                 //     activityDataResponse,
//                 //     averageSessionsDataResponse] = await Promise.all([
//                 //     fetch(`http://localhost:3000/user/${id}`),
//                 //     fetch(`http://localhost:3000/user/${id}/performance`),
//                 //     fetch(`http://localhost:3000/user/${id}/activity`),
//                 //     fetch(`http://localhost:3000/user/${id}/average-sessions`)
//                 // ]);
//                 const [userDataResponse, performanceDataResponse,
//                     activityDataResponse,
//                     averageSessionsDataResponse] = await Promise.all([
//                     fetch("../components/UserData.json"),
//                     fetch("../components/Performance.json"),
//                     fetch("../components/activity.json"),
//                     fetch("../components/averageSessions.json")
//                 ]);
//
//
//
//                 setUserData(userData);
//                 setPerformanceData(performance);
//                 setActivityData(activity);
//                 setAverageSessionsData(averageSessions);
//
//
//                 console.log("User data:", userData);
//                 console.log("User data:", userData);
//                 console.log("Performance data:", performance);
//                 console.log("activity data:", activity);
//                 console.log("averageSessions data:", averageSessions);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
//
//         fetchData();
//     }, [id]);
//
//
//     const firstName = userData.data[0].userInfos.firstName;
//
//     const sessions = activity.data[0].sessions.map(session => {
//         return {
//             day: session.day,
//             kilogram: session.kilogram,
//             calories: session.calories
//         };
//     });
//     const formattedSessions = averageSessions.data[0].sessions.map((session) => {
//         return {
//             day: session.day,
//             value: session.sessionLength
//         };
//     });
//     const chartSimpleLine = [
//         {dataKey: 'value', stroke: 'blue'}
//     ]
//     const kindArray = performance.data[0].kind
//     const formattedPerformanceData = performance.data[0].values.map((valueObject) => {
//         const kindWord = kindArray[valueObject.kind];
//         return { value: valueObject.value, kind: kindWord };
//     });
//     const todayScore = userData.data[0].todayScore !== undefined ? userData.data[0].todayScore : userData.data[0].score;
//     const scorePercentage = todayScore * 100;
//     const keyData = userData.data[0].keyData
//
//
//     return (
//         <>
//             <Header />
//             <main>
//                 <MenuLeft />
//                 <div className="center">
//                     <Firstname data={firstName}/>
//                     <DailyActivityChart data={sessions} />
//                     <div className="chart-bottom">
//                         <SimpleLineChart data={formattedSessions} xDataKey="day" lines={chartSimpleLine} />
//                         <SimpleRadarChart data={formattedPerformanceData} />
//                         <MyDoughnutChart value={scorePercentage} />
//                     </div>
//                 </div>
//                 <KeyData data={keyData}/>
//             </main>
//         </>
//     )
// }
//
// export default ProfilePage;
