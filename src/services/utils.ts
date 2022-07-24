import { format } from "mathjs";

export const formatNumber = (n: number): string =>
    new Intl.NumberFormat().format(
        Number(format(n, { notation: "fixed", precision: 1 })),
    );

export const getShortPkh = (pkh: string): string => {
    const ln = pkh.length;
    return `${pkh.slice(0, 10)}...${pkh.slice(ln - 10, ln)}`;
};
