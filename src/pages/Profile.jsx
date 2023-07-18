import React, {useEffect, useState} from 'react';
import "../css/Profile.scss";
import Header from "../components/Header/Header";
import MenuLeft from "../components/MenuLeft/MenuLeft";
import Firstname from "../components/Firstname/Firstname";
import DailyActivityChart from "../components/DailyActivityChart/DailyActivityChart";
import SimpleLineChart from "../components/SimpleLineChart/SimpleLineChart";
import SimpleRadarChart from "../components/SimpleRadarChart/SimpleRadarChart";
import MyDoughnutChart from "../components/SimpleRadialBarChart/MyDoughnutChart";
import KeyData from "../components/Keydata/Keydata";
import {useParams} from "react-router-dom";

// import userData from "../components/UserData.json"
// import performance from "../components/Performance.json"
// import activity from "../components/activity.json"
// import averageSessions from "../components/averageSessions.json"
//
// const data = {
//     userData,
//     performance,
//     activity,
//     averageSessions
// };

function ProfilePage() {
    const params = useParams();
    const id = parseInt(params.id, 10);

    const [data, setData] = useState({
        userData: null,
        performance: null,
        activity: null,
        averageSessions: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const endpoints = [
                    {key: "userData", url: `http://localhost:3000/user/${id}`},
                    {key: "performance", url: `http://localhost:3000/user/${id}/performance`},
                    {key: "activity", url: `http://localhost:3000/user/${id}/activity`},
                    {key: "averageSessions", url: `http://localhost:3000/user/${id}/average-sessions`}
                ];

                const newData = {};

                await Promise.all(
                    endpoints.map(async (endpoint) => {
                        const response = await fetch(endpoint.url);
                        const jsonData = await response.json();
                        newData[endpoint.key] = jsonData;
                    })
                );

                setData(newData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);


    console.log(data)

    const firstName = data.userData.data.userInfos.firstName
    const sessions = data.activity.data.sessions.map(session => {
        return {
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories
        };
    });
    const formattedSessions = data.averageSessions.data.sessions.map(session => {
        return {
            day: session.day,
            value: session.sessionLength
        };
    });
    const chartSimpleLine = [
        {dataKey: 'value', stroke: 'blue'}
    ];
    const kindArray = data.performance.data.kind;
    const formattedPerformanceData = data.performance.data.data.map(valueObject => {
        const kindWord = kindArray[valueObject.kind];
        return {value: valueObject.value, kind: kindWord};
    });
    const todayScore = data.userData.data.todayScore !== undefined ? data.userData.data.todayScore : data.userData.data.score;
    const scorePercentage = todayScore * 100;
    const keyData = data.userData.data.keyData;


    return (
        <>
            <Header/>
            <main>
                <MenuLeft/>
                <div className="center">
                    <Firstname data={firstName}/>
                    <DailyActivityChart data={sessions}/>
                    <div className="chart-bottom">
                        <SimpleLineChart data={formattedSessions} xDataKey="day" lines={chartSimpleLine}/>
                        <SimpleRadarChart data={formattedPerformanceData}/>
                        <MyDoughnutChart value={scorePercentage}/>
                    </div>
                </div>
                <KeyData data={keyData}/>
            </main>
        </>
    );
}

export default ProfilePage;


// const [userDataResponse, performanceDataResponse,
//     activityDataResponse,
//     averageSessionsDataResponse] = await Promise.all([
//     fetch('../components/UserData.json'),
//     fetch('../components/Performance.json'),
//     fetch('../components/activity.json'),
//     fetch('../components/averageSessions.json')
// ]);


// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const [userDataResponse, performanceDataResponse,
//                 activityDataResponse,
//                 averageSessionsDataResponse] = await Promise.all([
//                 fetch(`http://localhost:3000/user/${id}`),
//                 fetch(`http://localhost:3000/user/${id}/performance`),
//                 fetch(`http://localhost:3000/user/${id}/activity`),
//                 fetch(`http://localhost:3000/user/${id}/average-sessions`)
//             ]);
//             const userData = await userDataResponse.json();
//             const performance = await performanceDataResponse.json();
//             const activity = await activityDataResponse.json();
//             const averageSessions = await averageSessionsDataResponse.json();
//
//             setUserData(userData);
//             setPerformanceData(performance);
//             setActivityData(activity);
//             setAverageSessionsData(averageSessions);
//
//             console.log("User data:", userData);
//             console.log("Performance data:", performance);
//             console.log("Activity data:", activity);
//             console.log("Average sessions data:", averageSessions);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };
//
//     fetchData();
// }, [id]);