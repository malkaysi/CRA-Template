import PropTypes from "prop-types";

export const ContentLayout = ({ children }) => {
  // This is where content children would be displayed within the main layout
  return (
    <>
      <div>{children}</div>
    </>
  );
};

ContentLayout.propTypes = {
  children: PropTypes.element,
};
