import "./output.css";
import "./styles.css";
import data from "./data";

import Plan from './components/Plan'

export default function App() {
  return (
    <div className="App mb-10">
      <h1>Our Pricing Plans</h1>
      <div className="container mx-auto mt-16">
        <div className="px-0 md:px-20 lg:px-28 mx-auto">
          <div className="flex sm:justify-between flex-wrap lg:flex-nowrap gap-4 gap-y-14 justify-center">
            {
              data.map(item => <Plan key={item.title} item={item} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}
