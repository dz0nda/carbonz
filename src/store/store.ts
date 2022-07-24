import create from "zustand";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";

interface Store {
    wallet: BeaconWallet | null;
    address: string;
    setAddress: (address: string) => void;
}

const client =
    typeof window !== "undefined"
        ? new BeaconWallet({
              name: "Carbonz",
              preferredNetwork: NetworkType.MAINNET,
          })
        : null;

export const useStore = create<Store>((set) => ({
    wallet: client,
    address: "",
    setAddress: (address) => set({ address: address }),
}));
