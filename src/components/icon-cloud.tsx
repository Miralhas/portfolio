import { useColorScheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import {
    Cloud,
    fetchSimpleIcons,
    ICloud
} from "react-icon-cloud";
import { renderCustomIcon } from "../utils/utils";

const cloudProps: Omit<ICloud, "children"> = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "div",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.02,
        minSpeed: 0.02,
        dragControl: false,
        textAlign: "centre",
    },
};

export type DynamicCloudProps = {
    iconSlugs: string[];
};

export type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
    const [data, setData] = useState<IconData | null>(null);
    const { mode } = useColorScheme();

    useEffect(() => {
        fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }, [iconSlugs]);

    const renderedIcons = useMemo(() => {
        if (!data) return null;
        return Object.values(data.simpleIcons).map((icon) =>
            renderCustomIcon(icon, mode || "light"),
        );
    }, [data, mode]);

    return (
        // @ts-expect-error idk?
        <Cloud {...cloudProps}>
            <>
                {renderedIcons}
            </>
        </Cloud>
    );
}
