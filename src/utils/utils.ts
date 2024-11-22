import { renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

export const truncateText = (text: string, words: number) => {
    const splittedText = text.split(" ").slice(0, words).join(" ");
    return splittedText.concat(splittedText.length === text.length ? "" : "...");
}

export const capitalize = (text: string) => {
    const firstLetter = text[0].toUpperCase();
    return firstLetter + text.slice(1, text.length);
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string, iconSize = 42) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
    const minContrastRatio = theme === "dark" ? 2 : 1.2;

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: iconSize,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            title: icon.title === "icon" ? capitalize(icon.slug) : icon.title,
            onClick: (e) => e.preventDefault(),
            style: { cursor: "default" }
        },
    });
};