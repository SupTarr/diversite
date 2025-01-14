// See https://nextjs.org/docs/advanced-features/custom-app
type pageProps

module PageComponent = {
  type t = React.component<pageProps>
}

type props = {
  @as("Component")
  component: PageComponent.t,
  pageProps: pageProps,
}

// We are not using `@react.component` since we will never
// use <App/> within our ReScript code.
// It's only used within `pages/_app.js`
let default = (props: props): React.element => {
  let router = Next.Router.useRouter()

  switch router.route {
  | "/" => <PageHome />
  | "/careers" => <PageCareers />
  | "/careers/developer" => <PageCareersDeveloper />
  | "/careers/designer" => <PageCareersDesigner />
  | "/careers/projectmanager" => <PageCareersProjectManager />
  | "/careers/sales" => <PageCareersSales />
  | "/internships/developer" => <PageInternshipDev />
  | "/internships/design" => <PageInternshipDesign />
  | "/contact" => <PageContact />
  | "/ourwork" =>
    <PageOurWork
      selectedCategory={Links.ourwork_link_category(
        Js.Option.getWithDefault("", Js.Dict.get(router.query, "category")),
      )}
    />
  | _ => <Page404 />
  }
}
