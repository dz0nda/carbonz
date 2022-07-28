import { FC } from "react";
import { createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan("xs");

    return {
        primaryTitle: {
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            // fontSize: 17,
            fontWeight: 900,
            overflow: "hidden",

            // [BREAKPOINT]: {
            //     fontSize: 11,
            // },
        },
    };
});

interface ITextHighlightProps {
    children: any;
}

export const TextHighlight: FC<ITextHighlightProps> = (props) => {
    const { classes } = useStyles();

    return (
        <Text component="span" size="md" className={classes.primaryTitle}>
            {props.children}
        </Text>
    );
};
