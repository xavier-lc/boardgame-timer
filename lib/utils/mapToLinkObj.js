export default ([path, title, component, isExact = true]) => ({
    path,
    title,
    component,
    exact: isExact
});
