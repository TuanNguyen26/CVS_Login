// import React, { Component } from "react";
// import { enquireScreen } from "enquire-js";
// import { injectIntl } from "gatsby-plugin-intl";
// import loadable from "@loadable/component";

// import { Feature100DataSource, SidebarDataSource } from "../data/home.data";

// const Layout = loadable(() => import("../components/Layout"));
// const SEO = loadable(() => import("../components/SEO"));
// const Feature100 = loadable(() => import("../components/Home/Feature100"));

// let isMobile;
// enquireScreen(b => {
//   isMobile = b;
// });

// class IndexPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isMobile
//     };
//   }

//   componentDidMount() {
//     enquireScreen(b => {
//       this.setState({ isMobile: !!b });
//     });
//   }

//   render() {
//     const { intl } = this.props;

//     return (
//       <>
//         <SEO title="Computer Vision Vietnam" />
//         <Layout>
//           <Feature100
//             id="Feature100"
//             key="Feature100"
//             dataSource={Feature100DataSource}
//             isMobile={this.state.isMobile}
//           />
//         </Layout>
//       </>
//     );
//   }
// }

// export default injectIntl(IndexPage);

import React, { Component } from "react";
import { enquireScreen } from "enquire-js";
import { injectIntl } from "gatsby-plugin-intl";
import loadable from "@loadable/component";

import { Feature100DataSource, SidebarDataSource } from "../data/home.data";
import { useEffect } from "react";
import { useState } from "react";

const Layout = loadable(() => import("../components/Layout"));
const SEO = loadable(() => import("../components/SEO"));
const Feature100 = loadable(() => import("../components/Home/Feature100"));

let isMobile;
enquireScreen(b => {
  isMobile = b;
});
const IndexPage = () => {
  // class IndexPage extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isMobile,
  //       loginDrawer: false
  //     };
  //   }
  const [isMobile, setIsMobile] = useState();
  const [isloginDrawer, setISLoginDrawer] = useState(false);

  // useEffect(() => {
  //   enquireScreen(b => {
  //     this.setState({ isMobile: !!b });
  //   });
  // }, []);

  // const { intl } = this.props;
  console.log("index", isloginDrawer);
  return (
    <>
      <SEO title="Computer Vision Vietnam" />
      <Layout isloginDrawer={isloginDrawer} setISLoginDrawer={setISLoginDrawer}>
        <Feature100
          id="Feature100"
          key="Feature100"
          dataSource={Feature100DataSource}
          isMobile={isMobile}
          isloginDrawer={isloginDrawer}
          setISLoginDrawer={setISLoginDrawer}
        />
      </Layout>
    </>
  );
};

export default injectIntl(IndexPage);
