import { useState } from "react";
import { GetStaticPropsContext } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import {
    MantineProvider,
    ColorScheme,
    ColorSchemeProvider,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

export default function App(
    props: AppProps & { colorScheme: ColorScheme },
): JSX.Element {
    const { Component, pageProps } = props;
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

    const toggleColorScheme = (value?: ColorScheme) => {
        const nextColorScheme =
            value || (colorScheme === "dark" ? "light" : "dark");
        setColorScheme(nextColorScheme);
    };

    return (
        <>
            <Head>
                <title>Carbonz</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>

            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    theme={{ colorScheme }}
                    withGlobalStyles
                    withNormalizeCSS
                >
                    <NotificationsProvider>
                        <Component {...pageProps} />
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}

// App.getStaticProps = ({ ctx }: { ctx: GetStaticPropsContext }) => {
//     if (ctx.res?.statusCode === 404) {
//         ctx.res.writeHead(302, { Location: "/" });
//         ctx.res.end();
//         return;
//     }

//     return {
//         colorScheme: "light",
//     };
// };
