open ReasonReact;
open PortfolioData;

[@react.component]
let make = () => {
  render: _self => {
    <MainPage className="page-ourwork">
      <div className="ourwork_section-header-content bg-gradient-color1">
        <div className="container align-items-baseline">
          <h1
            className="text-white letter-spacing -text-uppercase -text-header-shadow">
            {string("Our Work")}
          </h1>
        </div>
        <div className="container page-ourwork_nav nav">
          <input type_="checkbox" />
          <div className="nav-icon nav-icon-arrow">
            <h6> {string("Category")} </h6>
            <Icon iconType=Icon.ArrowDown />
          </div>
          <div className="nav-container">
            <a href=Links.ourwork_appsandplatforms>
              {string("Applications & Platforms")}
            </a>
            <a href=Links.ourwork_ai> {string("Artificial Intelligence")} </a>
            <a href=Links.ourwork_websites> {string("Websites")} </a>
            <a href=Links.ourwork_vr> {string("Virtual Reality")} </a>
            <a href=Links.ourwork_games> {string("Games")} </a>
          </div>
        </div>
      </div>
      <div
        className="ourwork_section-header section-header bg-gradient-color1"
      />
      <div className="buffer" />
      <div>
        <PortfolioItem
          id="appsandplatforms"
          key="mintcrowd"
          item=mintcrowdPortfolio
        />
        <PortfolioItem key="adsoup" item=adsoupPortfolio />
        <PortfolioItem key="copanel" item=copanelPortfolio />
        <PortfolioItem key="eventcomet" item=eventcometPortfolio />
        <PortfolioItem id="ai" key="boneage" item=boneagePortfolio />
        <PortfolioItem id="vr" key="vr" item=vrPortfolio />
        <PortfolioItem id="websites" key="ketawa" item=ketawaPortfolio />
        <PortfolioItem key="willamailn" item=wilaamalinPortfolio />
        <PortfolioItem key="eastwest" item=eastwestPortfolio />
        <PortfolioItem id="games" key="kikii" item=kikiiPortfolio />
        <PortfolioItem key="micro" item=microgamesPortfolio />
      </div>
    </MainPage>;
  },
};