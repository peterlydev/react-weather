import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import './Forecast.css'

const WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ( {data} ) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK.slice(dayInWeek, WEEK.length).concat(WEEK.slice(0, dayInWeek));

  console.log(forecastDays)
  
  return (
  <>
    <label className="title">Daily</label>
    <Accordion allowZeroExpanded>
      {data.list.splice(0, 7).map((item, idx) => (
        <AccordionItem key={idx}>
          <AccordionItemHeading>
          <AccordionItemButton>
          <div className="dailyItem">
            <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className="icon-small" />
            <label className="day"></label>
          </div>
          </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          </AccordionItemPanel>
        </AccordionItem>
      ))}

    </Accordion>
  </>
  )
}

export default Forecast
