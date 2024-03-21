import arrowIcon from "../arrow.svg";
import Button from './Button'

export default function Plan({item}) {
  return (
    <div className={`plan rounded-lg p-6 relative ${!item.is_beginner ? 'premium' : ''}`}>
      {
        item.is_popular &&
        <div className="top-btn text-center absolute top-0">
          <div className="gradient p-2 px-6 rounded-full text-xs font-bold">Popular</div>
        </div>
      }
      <p className="text-center title">{item.title}</p>
      <p className="text-center price flex items-start justify-center py-5">
        <span className="currency">$</span>
        <span className="value">{item.cost}</span>
        <span className="self-end">/ Monthly</span>
      </p>
      <ul className="benefits px-8 md:px-4 lg:px-6 mb-8">
        {
          item.features.map(feature => (
            <li key={feature} className="flex space-x-2 pb-3">
              <img src={arrowIcon} />
              <span>{feature}</span>
            </li>
          ))
        }
      </ul>
      <div className="bottom-btn text-center absolute bottom-0">
        <Button label="START NOW" />
      </div>
    </div>
  )
}
