import { useColorScheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { renderCustomIcon } from "../utils/utils";
import { fetchSimpleIcons } from "react-icon-cloud";
import { IconData } from "../types/icon-data";

export const useSimpleIcons = (slugs: string[], iconSize = 42) => {
    const [data, setData] = useState<IconData | null>(null);
    const { mode } = useColorScheme();

    useEffect(() => {
        fetchSimpleIcons({ slugs }).then(setData);
    }, [slugs]);

    const renderedIcons = useMemo(() => {
        if (!data) return null;

        return Object.values(data.simpleIcons).map((icon) =>
            renderCustomIcon(icon, mode || "light", iconSize),
        );
    }, [data, mode, iconSize]);

    return renderedIcons;
}