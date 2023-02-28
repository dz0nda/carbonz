import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import {
    AppShell,
    Container,
    Paper,
    SimpleGrid,
    Divider,
    Text,
} from "@mantine/core";
import {
    validateAddress,
    validateKeyHash,
    validateContractAddress,
} from "@taquito/utils";

import { useStore } from "@store/store";
import { Header } from "@components/header";
import { HowItWorks } from "@components/how-it-works";
import { SearchBar } from "@components/search-bar";
import { ConnectButton } from "@components/connect-button";
import { ResultCard } from "@components/result-card";
import { ResultCardContract } from "@components/result-card-contract";
import { useStyles } from "@styles/index.styles";

const Home: FC = () => {
    const router = useRouter();
    const { address, setAddress } = useStore();
    const { classes } = useStyles();

    const validateAbstract = (
        address: string,
        validateFn: (value: string) => number,
    ) => {
        return validateFn(address) === 3 ? true : false;
    };

    useEffect(() => {
        if (router.query.address) {
            if (
                validateAbstract(String(router.query.address), validateAddress)
            ) {
                setAddress(String(router.query.address));
            } else {
                setAddress("");
                router.push("/");
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
                                    <Text align="center" weight="bold">
                                        OR
                                    </Text>
                                    <ConnectButton />
                                </SimpleGrid>
                            </div>
                        </div>

                        {address.length &&
                        validateAbstract(address, validateContractAddress) ? (
                            <ResultCardContract />
                        ) : validateAbstract(address, validateKeyHash) ? (
                            <ResultCard />
                        ) : null}
                    </div>
                </Paper>
            </Container>
        </AppShell>
    );
};

export default Home;
