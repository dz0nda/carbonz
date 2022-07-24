import { FC } from "react";
import { Center, Stack, Text, Space, Loader } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { sum, mean, median } from "mathjs";

import { formatNumber, getShortPkh } from "@services/utils";
import { G_CO2_PER_GAS } from "@services/constants";
import { useStore } from "@store/store";
import { useApi } from "@hooks/useApi";
import { useStyles } from "@styles/result.styles";

export const ResultCard: FC = () => {
    const { classes } = useStyles();
    const address = useStore((state) => state.address);
    const { data, isLoading } = useApi(address);
    const largeScreen = useMediaQuery("(min-width: 400px)");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const TextHighlight = (props: { children: any }) => {
        return (
            <Text component="span" size="md" className={classes.primaryTitle}>
                {props.children}
            </Text>
        );
    };

    return (
        <Center className={classes.contacts}>
            {isLoading ? (
                <Loader color="white" />
            ) : (
                <Stack className={classes.stack}>
                    <Text size="md">
                        Address{" "}
                        <TextHighlight>
                            {largeScreen ? address : getShortPkh(address)}
                        </TextHighlight>
                    </Text>
                    <Space h="md" />
                    <Text size="md">
                        {"This address initiated "}
                        <TextHighlight>
                            {formatNumber(data.length)} transactions
                        </TextHighlight>
                        {" consuming "}
                        <TextHighlight>
                            {formatNumber(sum(data))} gas.
                        </TextHighlight>
                    </Text>
                    <Text size="md">
                        {"In total, this address is responsible for "}
                        <TextHighlight>
                            {formatNumber(sum(data) * G_CO2_PER_GAS)}
                            {" grams of CO₂ emissions."}
                        </TextHighlight>
                    </Text>

                    <Text size="md">
                        {"The average gas consumption for this address is "}
                        <TextHighlight>
                            {formatNumber(mean(data))} gas
                        </TextHighlight>
                        {" or "}
                        <TextHighlight>
                            {formatNumber(mean(data) * G_CO2_PER_GAS)}
                            {" g of CO₂ emissions."}
                        </TextHighlight>
                    </Text>

                    <Text size="md">
                        {"The median gas consumption for this address is "}
                        <TextHighlight>
                            {formatNumber(median(data))} gas
                        </TextHighlight>
                        {" or "}
                        <TextHighlight>
                            {formatNumber(median(data) * G_CO2_PER_GAS)}
                            {" g of CO₂ emissions."}
                        </TextHighlight>
                    </Text>
                </Stack>
            )}
        </Center>
    );
};
