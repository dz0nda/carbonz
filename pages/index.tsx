import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { AppShell, Container, Paper, SimpleGrid, Divider } from "@mantine/core";
import { validateAddress } from "@taquito/utils";

import { useStore } from "@store/store";
import { Header } from "@components/header";
import { HowItWorks } from "@components/how-it-works";
import { SearchBar } from "@components/search-bar";
import { ConnectButton } from "@components/connect-button";
import { ResultCard } from "@components/result-card";
import { useStyles } from "@styles/index.styles";

const Home: FC = () => {
    const router = useRouter();
    const { address, setAddress } = useStore();
    const { classes } = useStyles();

    useEffect(() => {
        if (router.query.address) {
            if (validateAddress(String(router.query.address)) < 3) {
                router.push("/");
            } else {
                setAddress(String(router.query.address));
            }
        }
    }, [router.query]);

    return (
        <AppShell className={classes.wrapper} padding={0}>
            <Container size="md" className={classes.inner}>
                <Paper shadow="md" radius="lg">
                    <div className={classes.formWrapper}>
                        <div className={classes.form}>
                            <Header />

                            <HowItWorks />

                            <div className={classes.fields}>
                                <Divider my="sm" />

                                <SimpleGrid cols={1}>
                                    <SearchBar />
                                    <ConnectButton />
                                </SimpleGrid>
                            </div>
                        </div>

                        {address && <ResultCard />}
                    </div>
                </Paper>
            </Container>
        </AppShell>
    );
};

export default Home;
