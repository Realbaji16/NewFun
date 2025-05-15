import React, { useEffect, useRef, useState } from 'react';
import { createChart, ColorType, CrosshairMode, LineStyle, IChartApi, SeriesType } from 'lightweight-charts';

interface PriceChartProps {
  data: {
    time: string;
    value: number;
  }[];
}

const tools = [
  { id: 'cursor', icon: '⊕', label: 'Cursor' },
  { id: 'line', icon: '/', label: 'Line' },
  { id: 'parallel', icon: '∥', label: 'Parallel Lines' },
  { id: 'fibonacci', icon: '⋮', label: 'Fibonacci' },
  { id: 'rectangle', icon: '□', label: 'Rectangle' },
  { id: 'arrow', icon: '↗', label: 'Arrow' },
  { id: 'text', icon: 'T', label: 'Text' },
  { id: 'measure', icon: '◎', label: 'Measure' },
];

export const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Clean up existing chart if it exists
    if (chartRef.current) {
      chartRef.current.remove();
      chartRef.current = null;
    }

    const getChartWidth = () => {
      if (!chartContainerRef.current) return 300;
      const containerWidth = chartContainerRef.current.offsetWidth;
      const padding = isMobile ? 16 : 32;
      const toolsPanelWidth = isMobile ? 0 : 48;
      return Math.max(containerWidth - padding - toolsPanelWidth, 300);
    };

    // Create new chart
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: '#171717' },
        textColor: '#7F7F7F',
        fontSize: isMobile ? 10 : 12,
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
      width: getChartWidth(),
      height: isMobile ? 250 : 350,
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: {
          color: '#30EAF7',
          labelBackgroundColor: '#30EAF7',
          width: 1,
          style: LineStyle.Solid,
        },
        horzLine: {
          color: '#30EAF7',
          labelBackgroundColor: '#30EAF7',
          width: 1,
          style: LineStyle.Solid,
        },
      },
      rightPriceScale: {
        borderColor: '#494949',
        scaleMargins: {
          top: 0.2,
          bottom: 0.2,
        },
      },
      timeScale: {
        borderColor: '#494949',
        timeVisible: true,
        secondsVisible: false,
        ticksVisible: true,
        borderVisible: true,
      },
    });

    chartRef.current = chart;

    const mainSeries = chart.addBaselineSeries({
      baseValue: { type: 'price', price: 0 },
      topLineColor: '#30EAF7',
      topFillColor1: 'rgba(48, 234, 247, 0.28)',
      topFillColor2: 'rgba(48, 234, 247, 0)',
      bottomLineColor: '#30EAF7',
      bottomFillColor1: 'rgba(48, 234, 247, 0.28)',
      bottomFillColor2: 'rgba(48, 234, 247, 0)',
      lineWidth: 2,
      lastValueVisible: true,
      priceLineVisible: true,
      crosshairMarkerVisible: true,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: '#30EAF7',
      crosshairMarkerBackgroundColor: '#171717',
    });

    mainSeries.setData(data);
    chart.timeScale().fitContent();

    const handleResize = () => {
      if (chartRef.current && chartContainerRef.current) {
        const newWidth = getChartWidth();
        chartRef.current.applyOptions({ 
          width: newWidth,
          height: isMobile ? 250 : 350,
        });
        chartRef.current.timeScale().fitContent();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [data, isMobile]);

  return (
    <div className="w-full bg-[#171717] rounded-xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left side tools panel - hidden on mobile */}
        <div className="hidden md:flex w-12 border-r border-[#494949] py-4 flex-col items-center gap-4">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-lg ${
                selectedTool === tool.id
                  ? 'bg-[#30EAF7] text-black'
                  : 'text-[#7F7F7F] hover:bg-[#ffffff1a]'
              }`}
              title={tool.label}
            >
              {tool.icon}
            </button>
          ))}
        </div>

        {/* Main chart area */}
        <div className="flex-1">
          {/* Chart header */}
          <div className="p-2 md:p-4 border-b border-[#494949]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                <span className="text-[#30EAF7] text-xs md:text-sm">TED/USD • 15 • Raydium</span>
                <div className="flex items-center space-x-2 text-xs md:text-sm mt-2 md:mt-0">
                  <span className="text-[#7F7F7F]">O</span>
                  <span className="text-[#30EAF7]">0.02061</span>
                  <span className="text-[#7F7F7F]">H</span>
                  <span className="text-red-500">0.02064</span>
                  <span className="text-[#7F7F7F]">L</span>
                  <span className="text-green-500">0.01930</span>
                  <span className="text-[#7F7F7F]">C</span>
                  <span className="text-white">0.01992</span>
                  <span className="text-red-500">-0.00069</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div ref={chartContainerRef} className="w-full p-2 md:p-4" />

          {/* Bottom time controls */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-2 md:p-4 border-t border-[#494949] text-xs">
            <div className="flex items-center space-x-2 mb-2 md:mb-0 overflow-x-auto w-full md:w-auto">
              <button className="px-2 py-1 text-[#7F7F7F] whitespace-nowrap">5y</button>
              <button className="px-2 py-1 text-[#7F7F7F] whitespace-nowrap">1y</button>
              <button className="px-2 py-1 text-[#7F7F7F] whitespace-nowrap">6m</button>
              <button className="px-2 py-1 text-[#7F7F7F] whitespace-nowrap">3m</button>
              <button className="px-2 py-1 text-[#7F7F7F] whitespace-nowrap">1m</button>
              <button className="px-2 py-1 text-[#7F7F7F] whitespace-nowrap">5d</button>
              <button className="px-2 py-1 text-[#7F7F7F] whitespace-nowrap">1d</button>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-[#7F7F7F]">07:12:15</span>
              <div className="flex items-center space-x-2">
                <button className="text-[#7F7F7F]">%</button>
                <button className="text-[#7F7F7F]">log</button>
                <button className="text-[#30EAF7]">auto</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 