open ReasonReact;
open Belt;
[@bs.module]
external social_fb: string = "../../../../public/images/facebook.svg";
[@bs.module]
external social_in: string = "../../../../public/images/linkedin.svg";
[@bs.module]
external social_mail: string = "../../../../public/images/email.svg";
let component = ReasonReact.statelessComponent("MainPageRe");

let make =
    (
      ~className: option(string)=?,
      ~extraPageEnds=?,
      children: array(ReasonReact.reactElement),
    ) => {
  ...component,
  render: _self => {
    let extraPageEndsElement =
      switch (extraPageEnds) {
      | None => null
      | Some(el) => el
      };
    <Page
      pageEnds={
        top: [
          Children(
            List.toArray([
              <nav className="nav -text-right">
                <Logo />
                <input type_="checkbox" />
                <div className="nav-icon"> <div /> <div /> <div /> </div>
                <div className="nav-container">

                    <Link href=Links.home> {string("Home")} </Link>
                    <Link href=Links.ourwork> {string("Our Work")} </Link>
                    <Link href=Links.careers> {string("Careers")} </Link>
                    <Link href=Links.contacts> {string("Contact Us")} </Link>
                    <Link href=Links.contacts>
                      {string("Build Your Ideas")}
                    </Link>
                  </div> /* TODO: This should trigger a popup with an form and a submit button. No need to add any other things or style it. I'll take care of those */
              </nav>,
              extraPageEndsElement,
            ]),
          ),
        ],
        bottom: [Children(List.toArray([extraPageEndsElement]))],
      }
      className={Js.Option.getWithDefault("mainpage-default", className)}>
      <div className="main-content"> ...children </div>
      <div className="footer">
        <div className="social-media">
          <Link
            isExternal=true
            target="_blank"
            href="https://www.facebook.com/DivertiseAsia/"
            className="icon-social social-fb">
            <img src=social_fb />
          </Link>
          <Link
            isExternal=true
            target="_blank"
            href="https://www.linkedin.com/company/divertiseasia"
            className="icon-social">
            <img src=social_in />
          </Link>
          <Link
            isExternal=true
            href="mailto:contact@divertise.asia"
            className="icon-social">
            <img src=social_mail />
          </Link>
        </div>
        <p>
          {ReasonReact.string({j| © 2017-2020 Divertise Asia Co.,Ltd. |j})}
        </p>
      </div>
    </Page>;
  },
};
