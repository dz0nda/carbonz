import { FC } from "react";
import { createStyles, Text, Anchor } from "@mantine/core";

const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan("md");

    return {
        secondaryTitle: {
            // marginBottom: theme.spacing.md * 1.5,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.xl,
            },
        },

        paragraph: {
            // marginBottom: theme.spacing.md * 1.5,
            marginBottom: theme.spacing.xl,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.xl,
            },
        },
    };
});

export const HowItWorks: FC = () => {
    const { classes } = useStyles();

    return (
        <>
            <Text size="lg" weight={700} className={classes.secondaryTitle}>
                How it works ?
            </Text>

            <Text size="sm" className={classes.paragraph}>
                The wallet’s footprint is derived from the sum of Tezos Gas
                consumed for transactions leaving the wallet, multiplied by a
                estimated emissions factor. Tezos blockchain protocol represents
                approximately
                <Text component="span" size="sm" color="blue" weight="bold">
                    {" 2.4E-4 g CO2 eq. per unit of gas "}
                </Text>
                .<br />
                <Anchor size="sm">Read more.</Anchor>
            </Text>
        </>
    );
};
