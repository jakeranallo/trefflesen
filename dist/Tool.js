import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { readingList } from './data';
const Tool = ({ manifest, userId }) => {
    return (_jsx("div", { className: "trefflesen-tool", children: _jsx("div", { className: "reading-list", children: readingList.map((item, index) => (_jsxs("div", { className: "reading-item", children: [_jsx("h3", { children: item.title }), _jsx("p", { children: item.snippet }), _jsx("div", { className: "tags", children: item.tags.map((tag, tagIndex) => (_jsx("span", { className: "tag", children: tag }, tagIndex))) }), _jsx("a", { href: item.link, target: "_blank", rel: "noopener noreferrer", children: "Read more" })] }, index))) }) }));
};
export default Tool;
