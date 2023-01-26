import PropTypes from "prop-types";

export const MainLayout = ({ children }) => {
  return (
    <>
      <div>This is the mainlayout component</div>
      <main>{children}</main>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element,
};
