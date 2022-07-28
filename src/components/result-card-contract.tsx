import { FC } from "react";
import { Center, Stack, Text, Space, Loader } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { sum, mean, median } from "mathjs";

import { formatNumber, getShortPkh } from "@services/utils";
import { G_CO2_PER_GAS } from "@services/constants";
import { useStore } from "@store/store";
import { useContractsApi } from "@hooks/useApi";
import { useStyles } from "@styles/result.styles";
import { TextHighlight } from "@components/text-highlight";

export const ResultCardContract: FC = () => {
    const { classes } = useStyles();
    const address = useStore((state) => state.address);
    const { data, isLoading } = useContractsApi(address);
    const largeScreen = useMediaQuery("(min-width: 400px)");

    const sendTxs = data.filter((tx: any) => tx.sender.address === address);
    const targetTxs = data.filter((tx: any) => tx.target.address === address);

    if (isLoading) {
        return (
            <Center className={classes.contacts}>
                <Loader color="white" />
            </Center>
        );
    }

    if (!data.length) {
        return (
            <Center className={classes.contacts}>
                <Stack className={classes.stack}>
                    <Text size="md">
                        Contract{" "}
                        <TextHighlight>
                            {largeScreen ? address : getShortPkh(address)}
                        </TextHighlight>
                    </Text>
                    <Text size="md">
                        This contract has no transactions yet.
                    </Text>
                </Stack>
            </Center>
        );
    }

    return (
        <Center className={classes.contacts}>
            <Stack className={classes.stack}>
                <Text size="md">
                    Contract{" "}
                    <TextHighlight>
                        {largeScreen ? address : getShortPkh(address)}
                    </TextHighlight>
                </Text>
                <Space h="md" />
                <Text size="md">
                    {"This contract was targeted by "}
                    <TextHighlight>
                        {formatNumber(targetTxs.length)} transactions
                    </TextHighlight>
                    {" consuming "}
                    <TextHighlight>
                        {`${formatNumber(
                            sum(targetTxs.map((tx: any) => tx.gasUsed)),
                        )} gas.`}
                    </TextHighlight>
                </Text>
                <Text size="md">
                    {"This contract initiated "}
                    <TextHighlight>
                        {formatNumber(sendTxs.length)} transactions
                    </TextHighlight>
                    {" consuming "}
                    <TextHighlight>
                        {`${formatNumber(
                            sum(sendTxs.map((tx: any) => tx.gasUsed)),
                        )} gas.`}
                    </TextHighlight>
                </Text>
                <Text size="md">
                    {"In total, this contract is responsible for "}
                    <TextHighlight>
                        {formatNumber(
                            sum(data.map((tx: any) => tx.gasUsed)) *
                                G_CO2_PER_GAS,
                        )}
                        {" grams of CO₂ emissions."}
                    </TextHighlight>
                </Text>

                <Text size="md">
                    {"The average gas consumption for this contract is "}
                    <TextHighlight>
                        {formatNumber(mean(data.map((tx: any) => tx.gasUsed)))}{" "}
                        gas
                    </TextHighlight>
                    {" or "}
                    <TextHighlight>
                        {formatNumber(
                            mean(data.map((tx: any) => tx.gasUsed)) *
                                G_CO2_PER_GAS,
                        )}
                        {" g of CO₂ emissions."}
                    </TextHighlight>
                </Text>

                <Text size="md">
                    {"The median gas consumption for this contract is "}
                    <TextHighlight>
                        {formatNumber(
                            median(data.map((tx: any) => tx.gasUsed)),
                        )}{" "}
                        gas
                    </TextHighlight>
                    {" or "}
                    <TextHighlight>
                        {formatNumber(
                            median(data.map((tx: any) => tx.gasUsed)) *
                                G_CO2_PER_GAS,
                        )}
                        {" g of CO₂ emissions."}
                    </TextHighlight>
                </Text>
            </Stack>
        </Center>
    );
};
