import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, AreaPrimaryYAxis, AreaPrimaryXAxis } from '../../data/dummy'
import { Header } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'

const Area = () => {
  const { currentMode } = useStateContext()

  return (
      <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={AreaPrimaryXAxis}
      primaryYAxis={AreaPrimaryYAxis}
      chartArea={{ border: { width: 0 }}}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) =>
          <SeriesDirective key={index} {...item} /> )}
        </SeriesCollectionDirective>
      </ChartComponent>
  )
}

export default Area