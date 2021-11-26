const App = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column vh-100">
      <div className="col-11 col-sm-4 col-lg-4 col-xl-2 p-3 card">
        <img
          className="d-flex mb-3 rounded-3"
          src="images/image-equilibrium.jpg"
          alt="images"
        />
        <span className="nft-name">Equilibrium #3429</span>
        <span className="detail mb-3">
          Our Equilibrium collection promotes balance and calm
        </span>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img className="" src="images/icon-ethereum.svg" alt="images" />
            <span className="price-text"> 0.041 ETH</span>
          </div>
          <div className="d-flex align-items-center">
            <img className="" src="images/icon-clock.svg" alt="images" />
            <span className="time-left-text"> 3 days left</span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="d-flex mb-2">
          <div className="d-flex">
            <img
              className="avatar"
              src="images/image-avatar.png"
              alt="images"
            />
          </div>
          <div className="creator-text">
            <span className="color-soft-blue">Creation of </span>
            <span>Jules Wyvern</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
