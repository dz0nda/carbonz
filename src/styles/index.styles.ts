import { createStyles } from "@mantine/core";

const BREAKPOINT = "@media (max-width: 755px)";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useStyles = createStyles((theme: any) => ({
    wrapper: {
        minHeight: "100vh",
        position: "relative",
        boxSizing: "border-box",
        backgroundImage:
            "linear-gradient(250deg, rgba(130, 201, 30, 0) 70%, #1BB506 99%), url(https://wallpaperaccess.com/full/2024760.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    inner: {
        position: "relative",
        paddingTop: 200,
        paddingBottom: 80,

        [BREAKPOINT]: {
            paddingBottom: 80,
            paddingTop: 100,
        },
    },
    formWrapper: {
        display: "flex",
        backgroundColor: theme.white,
        borderRadius: theme.radius.lg,
        padding: 4,
        border: `1px solid ${theme.colors.gray[2]}`,

        [BREAKPOINT]: {
            flexDirection: "column",
        },
    },

    form: {
        boxSizing: "border-box",
        flex: 1,
        padding: theme.spacing.xl,
        paddingRight: theme.spacing.xl * 2,
        borderLeft: 0,

        [BREAKPOINT]: {
            padding: theme.spacing.md,
            paddingLeft: theme.spacing.md,
        },
    },

    fields: {
        marginTop: -12,
    },
}));
