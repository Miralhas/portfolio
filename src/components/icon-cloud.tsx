import {
    Cloud,
    ICloud
} from "react-icon-cloud";
import { useSimpleIcons } from "../hooks/useSimpleIcons";

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

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
    const renderedIcons = useSimpleIcons(iconSlugs);

    return (
        // @ts-expect-error idk?
        <Cloud {...cloudProps}>
            <>
                {renderedIcons}
            </>
        </Cloud>
    );
}
