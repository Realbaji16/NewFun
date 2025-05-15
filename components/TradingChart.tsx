'use client';

import { useEffect, useRef, useState } from 'react';
import { createChart, ColorType, CrosshairMode } from 'lightweight-charts';

interface TradingChartProps {
  data: {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume?: number;
  }[];
  marketCap?: string;
  volume?: string;
}

export const TradingChart = ({ data, marketCap = "$33.5k", volume = "$244.5k" }: TradingChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [timeInterval, setTimeInterval] = useState('15m');
  const [showMCAP, setShowMCAP] = useState(false);
  const [chartHeight, setChartHeight] = useState(500);

  useEffect(() => {
    const updateChartHeight = () => {
      // Set chart height based on screen size
      const isMobile = window.innerWidth < 768;
      setChartHeight(isMobile ? 300 : 500);
    };

    updateChartHeight();
    window.addEventListener('resize', updateChartHeight);
    return () => window.removeEventListener('resize', updateChartHeight);
  }, []);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chartProperties = {
      layout: {
        background: { color: '#171717' },
        textColor: '#DDD',
        fontSize: 12,
      },
      grid: {
        vertLines: { color: '#1F1F1F' },
        horzLines: { color: '#1F1F1F' },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: {
          color: '#555',
          width: 1,
          style: 3,
        },
        horzLine: {
          color: '#555',
          width: 1,
          style: 3,
        },
      },
      timeScale: {
        borderColor: '#1F1F1F',
        timeVisible: true,
        secondsVisible: false,
        fixLeftEdge: true,
        fixRightEdge: true,
      },
    };

    const chart = createChart(chartContainerRef.current, {
      ...chartProperties,
      width: chartContainerRef.current.clientWidth,
      height: chartHeight,
    });

    // Create area series instead of baseline series
    const mainSeries = chart.addAreaSeries({
      lineColor: '#30EAF7',
      topColor: 'rgba(48, 234, 247, 0.28)',
      bottomColor: 'rgba(48, 234, 247, 0.0)',
      lineWidth: 2,
      priceFormat: {
        type: 'price',
        precision: 8,
        minMove: 0.00000001,
      },
    });

    // Transform candlestick data to line data
    const lineData = data.map(item => ({
      time: item.time,
      value: item.close,
    }));

    mainSeries.setData(lineData);

    const volumeSeries = chart.addHistogramSeries({
      color: '#26a69a',
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '',
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });

    // Add volume data if available
    const volumeData = data.map(item => ({
      time: item.time,
      value: item.volume || 0,
      color: item.close >= (item.open || 0) ? 'rgba(48, 234, 247, 0.5)' : 'rgba(48, 234, 247, 0.3)',
    }));
    volumeSeries.setData(volumeData);

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
          height: chartHeight,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data, chartHeight]);

  return (
    <div className="flex flex-col gap-4 p-2 sm:p-4 rounded-lg bg-[#171717]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <div className="px-3 sm:px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] w-full sm:w-auto">
            <span className="text-[#00D7D7] text-xs sm:text-sm">MARKET CAP</span>
            <div className="text-white text-sm sm:text-base">{marketCap}</div>
          </div>
          <div className="px-3 sm:px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] w-full sm:w-auto">
            <span className="text-[#00D7D7] text-xs sm:text-sm">VOLUME</span>
            <div className="text-white text-sm sm:text-base">{volume}</div>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto -mx-2 px-2">
        <div className="flex gap-2 text-xs sm:text-sm min-w-max">
          {['1s', '1m', '5m', '15m', '1h', '4h', 'D'].map((interval) => (
            <button
              key={interval}
              className={`px-2 sm:px-3 py-1 rounded ${
                timeInterval === interval
                  ? 'bg-[#00D7D7] text-black'
                  : 'text-white hover:bg-[#2a2a2a]'
              }`}
              onClick={() => setTimeInterval(interval)}
            >
              {interval}
            </button>
          ))}
          <div className="ml-2 sm:ml-4 flex items-center gap-2">
            <button
              className={`px-2 sm:px-3 py-1 rounded ${
                !showMCAP ? 'bg-[#00D7D7] text-black' : 'text-white hover:bg-[#2a2a2a]'
              }`}
              onClick={() => setShowMCAP(false)}
            >
              Price
            </button>
            <button
              className={`px-2 sm:px-3 py-1 rounded ${
                showMCAP ? 'bg-[#00D7D7] text-black' : 'text-white hover:bg-[#2a2a2a]'
              }`}
              onClick={() => setShowMCAP(true)}
            >
              MCAP
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-8 sm:w-12 border-r border-[#2a2a2a]">
          <div className="flex flex-col gap-2 p-1 sm:p-2">
            <button className="text-[#666] hover:text-white">
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </button>
            <button className="text-[#666] hover:text-white">
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            </button>
          </div>
        </div>
        <div ref={chartContainerRef} className="flex-1" />
      </div>
    </div>
  );
}; 