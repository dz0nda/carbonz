import axios from "axios";

export const tzktApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TZKT_API_URL,
});

export const tzktImplicitApiGetKey = (
    address: string,
    pageIndex: number,
    previousPageData: [],
): string | null => {
    if (previousPageData && !previousPageData.length) return null;
    return `v1/operations/transactions?sender.in=${address}&offset.pg=${pageIndex}&limit=10000&level.ge=1&select=gasUsed&status=applied`; // SWR key
};

export const tzktContractApiGetKey = (
    address: string,
    pageIndex: number,
    previousPageData: [],
): string | null => {
    if (previousPageData && !previousPageData.length) return null;
    return `v1/operations/transactions?anyof.sender.target=${address}&offset.pg=${pageIndex}&limit=10000&level.ge=1&select=sender,target,gasUsed&status=applied`; // SWR key
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tzktApiFetcher = (url: string): any =>
    tzktApi.get(url).then((res) => res.data);

export const tzktApiOptions = {
    initialSize: 10,
    revalidateOnFocus: false,
};
