
// import { Header } from "components";

// const header = { Header }

// const Home = () => {
//     return (
//         <h2>home page</h2>

//     );
// }

// export default Home;


import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import { AppIcon } from "../../components/app-icon";
import { Link } from "react-router-dom";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useGetIdentity } from "@refinedev/core";
import { IUser } from "../src/components/header";

const Feature = ({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
}) => {
    return (
        <Box display="flex" gap={2} maxWidth={400}>
            <Box
                fontSize={64}
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
            >
                {icon}
            </Box>
            <Box>
                <Typography fontWeight="bold" fontSize={24}>
                    {title}
                </Typography>
                <Typography>{description}</Typography>
            </Box>
        </Box>
    );
};

export default function LandingPage() {
    const { data: user } = useGetIdentity<IUser>();

    return (
        <Stack>
            <Box
                component="header"
                p={2}
                display="flex"
                justifyContent="space-between"
            >
                {/* <AppIcon /> */}
                <Stack direction="row" gap={2}>
                    {user ? (
                        <Button
                            variant="contained"
                            component={Link}
                            to="/dashboard"
                            size="small"
                        >
                            Dashboard
                        </Button>
                    ) : (
                        <>
                            <Button
                                variant="outlined"
                                component={Link}
                                to="/login"
                                size="small"
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/Signup"
                                size="small"
                            >
                                Create Account
                            </Button>
                        </>
                    )}
                </Stack>
            </Box>
            <Box>
                <Box pb={{ xs: 5, sm: 20, md: 25, lg: 30 }}>
                    <Box px={4} py={10} maxWidth={1280} mx="auto">
                        <Typography
                            component="h1"
                            variant="h2"
                            fontWeight="bold"
                            textAlign="center"
                            color="primary.main"
                            fontSize={{
                                xs: "2.5rem",
                                md: "3.75rem",
                            }}
                        >
                            Your Personal Subcription Tracker
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            textAlign="center"
                            fontSize={{
                                xs: "1rem",
                                md: "1.25rem",
                            }}
                        >
                            Create customizable Subcription Tracker at one place for your all the
                            subscription out there.
                        </Typography>
                        <Box display="flex" justifyContent="center" mt={4}>
                            {user ? (
                                <Button variant="contained" component={Link} to="/dashboard">
                                    Dashboard
                                </Button>
                            ) : (
                                <Button variant="contained" component={Link} to="/login">
                                    Get Started.
                                </Button>
                            )}
                        </Box>
                    </Box>
                </Box>
                <Box bgcolor="primary.main">
                    <Box px={{ xs: 2, md: 10 }} maxWidth={1280} mx="auto">
                        <img src="/ss_hp.jpg" style={{ width: "100%", marginTop: "-20%" }} />
                    </Box>
                    <Box pb={20} pt={10} color="white" px={4} maxWidth={1280} mx="auto">
                        <Box display="flex" gap={4} justifyContent="center" flexWrap="wrap">
                            <Feature
                                title="Customizable RSVP Cards"
                                description="Simple customizable options to quickly create RSVP cards and still make it unique."
                                icon={<DashboardCustomizeIcon fontSize="inherit" />}
                            />
                            <Feature
                                title="Gauge Guest Demographic"
                                description="Attach questions to ask your guests to determine your demographic. Example: how many of your guests are vegan?"
                                icon={<QuestionMarkIcon fontSize="inherit" />}
                            />
                            <Feature
                                title="Invitations Via QR Codes"
                                description="Spread your invitations through portable QR Codes. Copy them as images and send."
                                icon={<QrCode2Icon fontSize="inherit" />}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* <Box component="footer" bgcolor="primary.main" p={4}>
                <Box
                    display="flex"
                    gap={4}
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    <Typography color="white" fontSize={20}>
            Made with </Typography>
                    <img src="/supabase-logo.svg" width={150} />
                    <img src="/material-ui-logo.svg" width={44} />
                    <img src="/refine-logo.svg" width={100} />

                    <Typography color="white" fontSize={20}>
            Made during </Typography>
                    <img src="/mh_logo.png" width={150} />
                    <Typography color="white" fontSize={20}>
            Thanks To Organiser </Typography>
                    <img src="/mim_logo_left.png" width={100} />
                    <img src="/team_logo_left.png" width={90} />
                </Box>
            </Box> */}

<Box component="footer" bgcolor="primary.main" p={4}>
    <Box
        display="flex"
        gap={40}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
    >
        <Box display="flex" flexDirection="column" alignItems="right">
            <Typography color="white" fontSize={20}>Made with</Typography>
            <img src="/supabase-logo.svg" width={150} />
            <img src="/material-ui-logo.svg" width={44} />
            <img src="/refine-logo.svg" width={100} />
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography color="white" fontSize={20}>Made during</Typography>
            <img src="/mh_logo.png" width={150} />
        </Box>

        <Box display="flex" flexDirection="column" alignItems="left">
            <Typography color="white" fontSize={20}>Thanks To Organiser</Typography>
            <img src="/mim_logo_left.png" width={150} />
            <img src="/team_logo_left.png" width={90} />
        </Box>
    </Box>
</Box>
        </Stack>
        
    );
}