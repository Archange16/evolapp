"use client";

import français from "../../public/assets/img/langues/français.ico";
import anglais from "../../public/assets/img/langues/anglais.ico";
import chinois from "../../public/assets/img/langues/chinois.ico";

import { useChangeLocale, useCurrentLocale } from "locales/client";

export const LocaleSelect = () => {
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();

    return (
        <select
        className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm forcus:outline-n"
        value={locale}
        onChange={(e) => changeLocale(e.target.value as "fr" | "en" | "zh")}>
            <option value="en">Anglais </option>
            <option value="fr">Français </option>
            <option value="zh">Chinois </option>
        </select>
    )
};