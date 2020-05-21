const ReactDOM = require("react-dom");

exports.replaceHydrateFunction = () => {
  console.log("cusomt", ReactDOM);
  return (element, container, callback) => {
    ReactDOM.unstable_createRoot(container, {
      hydrate: true,
      hydrationOptions: { onHydrated: callback },
    }).render(element);
  };
};
