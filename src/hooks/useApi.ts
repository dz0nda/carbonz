import useSWRInfinite from "swr/infinite";
import {
    tzktApiGetKey,
    tzktApiFetcher,
    tzktApiOptions,
} from "src/services/api";

interface IUseApi {
    data: Array<number>;
    isLoading: boolean;
}

export const useApi = (address: string): IUseApi => {
    console.log("address", address);
    const { data, error, isValidating } = useSWRInfinite(
        (pageIndex: number, previousPageData: []) =>
            tzktApiGetKey(address, pageIndex, previousPageData),
        tzktApiFetcher,
        tzktApiOptions,
    );

    if (error) {
        console.log(error);
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
