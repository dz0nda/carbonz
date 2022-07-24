import { FC } from "react";
import { createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme) => {
    // const BREAKPOINT = theme.fn.smallerThan("md");

    return {
        primaryTitle: {
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontSize: 23,
            fontWeight: 900,
            lineHeight: 1.1,
            // margin: 0,
            // padding: 0,
            // color: theme.colorScheme === "dark" ? theme.white : theme.black,

            // [BREAKPOINT]: {
            //     fontSize: 32,
            //     lineHeight: 1.2,
            // },
        },
    };
});

export const Header: FC = () => {
    const { classes } = useStyles();

    return (
        <>
            <h1 className={classes.primaryTitle}>
                Calculate the
                <Text
                    component="span"
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan" }}
                    inherit
                >
                    {" CO₂ footprint "}
                </Text>
                of a Tezos address
            </h1>
        </>
    );
};
