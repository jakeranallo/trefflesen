var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ToolComponent = (_a) => {
    var { id, name, description, version, icon, author, homepage, languages, tags, category, license } = _a, props = __rest(_a, ["id", "name", "description", "version", "icon", "author", "homepage", "languages", "tags", "category", "license"]);
    return (_jsxs("div", { className: "p-4", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: name }), _jsx("p", { className: "text-gray-600 mb-4", children: description }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("h2", { className: "font-semibold", children: "Details" }), _jsxs("ul", { className: "list-disc list-inside", children: [_jsxs("li", { children: ["Version: ", version] }), _jsxs("li", { children: ["Author: ", author] }), _jsxs("li", { children: ["Category: ", category] }), _jsxs("li", { children: ["License: ", license] })] })] }), _jsxs("div", { children: [_jsx("h2", { className: "font-semibold", children: "Tags" }), _jsx("div", { className: "flex flex-wrap gap-2", children: tags.map((tag) => (_jsx("span", { className: "bg-gray-100 px-2 py-1 rounded", children: tag }, tag))) })] })] })] }));
};
