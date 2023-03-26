import { Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";

function Dashboard() {
    const [token, setToken] = useState("");
    const [profileData, setProfileData] = useState();
    const [profileDataJson, setProfileDataJson] = useState();

    useEffect(() => {
        const currentPage = new URL(window.location.toLocaleString());
        if (currentPage.searchParams.get("code")) {
            fetch("http://localhost:3000/api/user/getprofile?code=" + currentPage.searchParams.get("code"))
                .then((response) => response.json())
                .then((json) => {
                    setProfileData(json);
                    setProfileDataJson(JSON.stringify(json, null, 2));
                });
        }

    }, []);

    const startNewMeeting = () => {
        window.location.href = "https://us04web.zoom.us/wc/3046701130/start";
    }

    const handleGetProfileDetails = () => {
        window.location.href = "https://zoom.us/oauth/authorize?response_type=code&client_id=m7e3llFeQcyYa27tRCBTCg&redirect_uri=http://localhost:8080/dashboard"
    }

    return (
        <div>
            <Button onClick={startNewMeeting}> Start Meeting</Button>
            <Button onClick={handleGetProfileDetails}> Get profile details</Button>
            <Button style={{ float: "right" }} onClick={() => { window.location.href = "/"; }}> Logout</Button>
            {[profileData && (
                <div class="container">
                    <Card sx={{ width: 300, height: 200, border: 2 }}>
                        <CardContent>
                            <img src={profileData.pic_url} alt="User photo" />
                            <div>
                                <h2>{profileData.first_name} {profileData.last_name}</h2>
                            </div>
                        </CardContent>
                    </Card>
                    <div class="response">
                        <h4>JSON Response:</h4>
                        <pre>
                            <code>
                                {profileDataJson}
                            </code>
                        </pre>
                    </div>
                </div>
            )]}
        </div>
    );
}

// https://us04web.zoom.us/j/3046701130?pwd=qKayNHKkKaVtcaNCCR9o1NYPvdpOZE.1
// https://us04web.zoom.us/wc/3046701130/start

export default Dashboard;