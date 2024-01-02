import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts'
import { pieChartData } from '../../data/dummy'
import { Header } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'

const Pie = () => {
  const { currentMode } = useStateContext()
  
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
        <Header category="Pie" title="Inflation Rate in Percentage" />
        <div className='w-full'>
      <ChartComponent
      id='pie-chart'
      height='420px'
      primaryXAxis={piePrimaryXAxis}
      primaryYAxis={piePrimaryYAxis}
      chartArea={{ border: { width: 0 }}}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[pieChartData, DateTime, Legend]}/>
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) =>
          <SeriesDirective key={index} {...item} /> )}
        </SeriesCollectionDirective>
      </ChartComponent>
      </div>
      </div>
  )
}

export default Pie