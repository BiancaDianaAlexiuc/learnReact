import Suite from "../suite/Suite";

const Suites = ({ suites }) => {
  return suites.map((suite) => <Suite {...suite} key={suite.id} />);
};

export default Suites;
