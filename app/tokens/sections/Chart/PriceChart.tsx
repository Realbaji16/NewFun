import React, { useEffect, useRef } from 'react';
import { createChart, IChartApi, ColorType, CrosshairMode, LineStyle, LineSeries, AreaSeries } from 'lightweight-charts';

interface PriceChartProps {
  data: {
    time: string;
    value: number;
  }[];
}

export const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Create chart instance
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#494949',
      },
      grid: {
        vertLines: { 
          color: '#1E1E1E',
          style: LineStyle.Solid,
        },
        horzLines: { 
          color: '#1E1E1E',
          style: LineStyle.Solid,
        },
      },
      width: chartContainerRef.current.clientWidth,
      height: 258,
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: {
          color: '#30EAF7',
          labelBackgroundColor: '#30EAF7',
        },
        horzLine: {
          color: '#30EAF7',
          labelBackgroundColor: '#30EAF7',
        },
      },
    });

    // Format the data to match the required structure
    const formattedData = data.map(item => ({
      time: item.time,
      value: item.value
    }));

    // Add price series
    const series = chart.addSeries(LineSeries, {
      color: '#30EAF7',
      lineWidth: 2,
      priceFormat: {
        type: 'price',
        precision: 6,
        minMove: 0.000001,
      },
    });

    // Add area series for the fill effect
    const areaSeries = chart.addSeries(AreaSeries, {
      lineColor: '#30EAF7',
      topColor: 'rgba(48, 234, 247, 0.28)',
      bottomColor: 'rgba(48, 234, 247, 0)',
      lineWidth: 2,
      priceFormat: {
        type: 'price',
        precision: 6,
        minMove: 0.000001,
      },
    });

    series.setData(formattedData);
    areaSeries.setData(formattedData);

    // Fit content and add margin
    chart.timeScale().fitContent();
    chart.timeScale().applyOptions({
      borderColor: '#494949',
      timeVisible: true,
      secondsVisible: false,
      ticksVisible: true,
      borderVisible: true,
    });

    // Handle resize
    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ 
          width: chartContainerRef.current.clientWidth 
        });
      }
    };

    window.addEventListener('resize', handleResize);
    chartRef.current = chart;

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data]);

  return (
    <div className="w-full bg-[#171717] rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button className="text-xs text-[#30EAF7] bg-[#ffffff1a] px-3 py-1 rounded-full">
            1s
          </button>
          <button className="text-xs text-white bg-[#ffffff1a] px-3 py-1 rounded-full">
            1m
          </button>
          <button className="text-xs text-white bg-[#ffffff1a] px-3 py-1 rounded-full">
            5m
          </button>
          {/* Add more time interval buttons as needed */}
        </div>
        <div className="flex gap-2">
          <button className="text-xs text-white bg-[#ffffff1a] p-1 rounded-full">
            <img src="/indicators.svg" alt="Indicators" className="w-4 h-4" />
          </button>
          <button className="text-xs text-white bg-[#ffffff1a] p-1 rounded-full">
            <img src="/fullscreen.svg" alt="Fullscreen" className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div ref={chartContainerRef} />
    </div>
  );
}; 