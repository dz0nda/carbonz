import { FC } from "react";
import { useRouter } from "next/router";
import { Button } from "@mantine/core";
import { NetworkType } from "@airgap/beacon-sdk";

import { useStore } from "@store/store";

export const ConnectButton: FC = () => {
    const router = useRouter();
    const wallet = useStore((state) => state.wallet);

    const connectWallet = async (): Promise<void> => {
        try {
            await wallet?.requestPermissions({
                network: {
                    type: NetworkType.MAINNET,
                    rpcUrl: "https://rpc.tzbeta.net",
                },
            });
            const address = await wallet?.getPKH();
            router.push(`?address=${address}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Button
            size="md"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            onClick={connectWallet}
        >
            Connect Wallet
        </Button>
    );
};
