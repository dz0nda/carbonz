import { FC, useState, useRef } from "react";
import { useRouter } from "next/router";
import { TextInput, ActionIcon } from "@mantine/core";
import { validateAddress } from "@taquito/utils";
import { FiSearch } from "react-icons/fi";

export const SearchBar: FC = () => {
    const router = useRouter();
    const [label, setLabel] = useState("");
    const [error, setError] = useState("");
    const ref = useRef<HTMLInputElement>(null);

    const submit = () => {
        if (validateAddress(label) < 3) {
            setError("Invalid address");
        } else {
            setError("");
            router.push(`?address=${label}`);
        }
    };

    return (
        <form>
            <TextInput
                placeholder="Enter Tezos address / domain"
                size="md"
                error={error}
                aria-label="My input"
                ref={ref}
                onChange={() => setLabel(ref.current?.value || "")}
                rightSection={
                    <ActionIcon variant="transparent" onClick={submit}>
                        <FiSearch />
                    </ActionIcon>
                }
            />
        </form>
    );
};
