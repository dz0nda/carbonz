import { createStyles } from "@mantine/core";
import bg from "@assets/bg.svg";

export const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan("xs");

    return {
        contacts: {
            color: "#fff",
            boxSizing: "border-box",
            position: "relative",
            borderRadius: theme.radius.md - 2,
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid transparent",
            padding: theme.spacing.xl,
            flex: "0 0 380px",

            [BREAKPOINT]: {
                marginBottom: theme.spacing.sm,
                paddingLeft: theme.spacing.md,
            },
        },

        stack: {
            // boxSizing: "border-box",
            // position: "relative",
            width: "100%",
        },

        contractsSkeleton: {
            borderRadius: theme.radius.md - 2,
            // backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid transparent",
            padding: theme.spacing.xl,
            flex: "0 0 380px",

            [BREAKPOINT]: {
                marginBottom: theme.spacing.sm,
                paddingLeft: theme.spacing.md,
            },
        },

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
