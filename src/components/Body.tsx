const Body: React.FC<{ openHamburger: boolean }> = ({ openHamburger }) => {
  return (
    <section className={`body-sty ${openHamburger ? "noscroll" : ""}`}>
      <div className="hero-img"></div>
      <div className="hero-text">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easy Bank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </p>
        <button type="button">Request Invite</button>
      </div>
    </section>
  );
};

export default Body;
