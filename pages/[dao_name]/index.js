import { Footer, Navbar } from '../../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../../sections';

import { Header } from "../../components/proposalPage/Header";
import CardList from "../../components/proposalPage/CardList";

// import "/components/proposalPage/styles.css";

const DaoProposal = () => (
  <div className="bg-primary-black overflow-hidden">
    {/* <Navbar />
    <Hero /> */}
    <div className="relative">
      {/* <About /> */}
      <div className="gradient-03 z-0" />
      
      {/* <div className="container"> */}
      <Header />
      <CardList />
    {/* </div> */}
    </div>
    {/* <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer /> */}
  </div>
);

export default DaoProposal;
