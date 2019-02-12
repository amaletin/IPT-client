export default ({ children }) => (
  <div className="catalog--layout container">
    {children}
    <style jsx>{`
      .catalog--layout {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </div>
);
