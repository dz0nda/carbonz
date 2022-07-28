import useSWRInfinite from "swr/infinite";
import {
    tzktImplicitApiGetKey,
    tzktContractApiGetKey,
    tzktApiFetcher,
    tzktApiOptions,
} from "src/services/api";

import { validatePublicKey, validateContractAddress } from "@taquito/utils";

interface IUseApi {
    data: Array<number>;
    isLoading: boolean;
}

export const useApi = (address: string): IUseApi => {
    const { data, error, isValidating } = useSWRInfinite(
        (pageIndex: number, previousPageData: []) =>
            tzktImplicitApiGetKey(address, pageIndex, previousPageData),
        tzktApiFetcher,
        tzktApiOptions,
    );

    if (error) {
        return {
            data: [0],
            isLoading: true,
        };
    }

    if (isValidating || !data?.length) {
        return {
            data: [0],
            isLoading: true,
        };
    }

    return {
        data: data?.flat() || [],
        isLoading: false,
    };
};

export const useContractsApi = (address: string): IUseApi => {
    const { data, error, isValidating } = useSWRInfinite(
        (pageIndex: number, previousPageData: []) =>
            tzktContractApiGetKey(address, pageIndex, previousPageData),
        tzktApiFetcher,
        tzktApiOptions,
    );

    if (error || isValidating || !data?.length) {
        return {
            data: [],
            isLoading: true,
        };
    }

    return {
        data: data?.flat() || [],
        isLoading: false,
    };
};
