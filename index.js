const element = (
  <div className="bg_container">
    <h1 className="heading">Congratulations</h1>

    <div className="card_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="logo_img"
      />
      <h1 className="kiranhead">Kiran V </h1>
      <p className="card_desc">Jawaharlal Nehru technology Kakinda</p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="logo_img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
