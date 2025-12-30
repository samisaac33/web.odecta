
import React, { useState, useEffect, useCallback } from 'react';
import { SlideType } from './types';
import CoverSlide from './components/slides/CoverSlide';
import SummarySlide from './components/slides/SummarySlide';
import ConnectivitySlide from './components/slides/ConnectivitySlide';
import ZoningSlide from './components/slides/ZoningSlide';
import Stage1Slide from './components/slides/Stage1Slide';
import Stage2Slide from './components/slides/Stage2Slide';
import CommercialSlide from './components/slides/CommercialSlide';
import ResidentialSlide from './components/slides/ResidentialSlide';
import EcotourismSlide from './components/slides/EcotourismSlide';
import FinancialsSlide from './components/slides/FinancialsSlide';
import ClosingSlide from './components/slides/ClosingSlide';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = [
    SlideType.Cover,
    SlideType.Summary,
    SlideType.Connectivity,
    SlideType.Zoning,
    SlideType.Stage1,
    SlideType.Stage2,
    SlideType.Commercial,
    SlideType.Residential,
    SlideType.Ecotourism,
    SlideType.Financials,
    SlideType.Closing
  ];

  const handleNext = useCallback(() => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex, slides.length]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const renderSlide = () => {
    const commonProps = {
      onNext: handleNext,
      onPrev: handlePrev,
      isFirst: currentSlideIndex === 0,
      isLast: currentSlideIndex === slides.length - 1,
    };

    switch (slides[currentSlideIndex]) {
      case SlideType.Cover: return <CoverSlide {...commonProps} />;
      case SlideType.Summary: return <SummarySlide {...commonProps} />;
      case SlideType.Connectivity: return <ConnectivitySlide {...commonProps} />;
      case SlideType.Zoning: return <ZoningSlide {...commonProps} />;
      case SlideType.Stage1: return <Stage1Slide {...commonProps} />;
      case SlideType.Stage2: return <Stage2Slide {...commonProps} />;
      case SlideType.Commercial: return <CommercialSlide {...commonProps} />;
      case SlideType.Residential: return <ResidentialSlide {...commonProps} />;
      case SlideType.Ecotourism: return <EcotourismSlide {...commonProps} />;
      case SlideType.Financials: return <FinancialsSlide {...commonProps} />;
      case SlideType.Closing: return <ClosingSlide {...commonProps} />;
      default: return <CoverSlide {...commonProps} />;
    }
  };

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden select-none">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none" />
      
      {/* Slide Container - Mobile Optimized */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-0 md:p-6 lg:p-8">
        <div className="w-full max-w-7xl h-full md:h-[90vh] bg-white md:rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
          <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
            {renderSlide()}
          </div>
          
          {/* Global Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-slate-100/50 z-40">
            <div 
              className="h-full bg-indigo-600 transition-all duration-500 ease-out" 
              style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Slide Controls - Positioned for Mobile Thumb Reach */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex gap-3 md:gap-4">
        <button 
          onClick={handlePrev}
          disabled={currentSlideIndex === 0}
          className="w-12 h-12 md:w-14 md:h-14 bg-slate-900/90 backdrop-blur text-white rounded-full transition-all flex items-center justify-center disabled:opacity-20 shadow-xl border border-white/10"
        >
          <i className="fas fa-arrow-left text-base md:text-lg" />
        </button>
        <button 
          onClick={handleNext}
          disabled={currentSlideIndex === slides.length - 1}
          className="w-12 h-12 md:w-14 md:h-14 bg-indigo-600 text-white rounded-full transition-all flex items-center justify-center disabled:opacity-20 shadow-xl border border-indigo-400"
        >
          <i className="fas fa-arrow-right text-base md:text-lg" />
        </button>
      </div>

      {/* Page Number Indicator - Compact for Mobile */}
      <div className="absolute top-4 left-4 md:top-10 md:left-10 z-50">
        <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2.5 rounded-full border border-white/10 text-white shadow-2xl flex items-center">
          <span className="hidden md:inline text-[10px] font-black tracking-[0.2em] uppercase opacity-50 mr-2">SLIDE</span>
          <span className="font-bold text-sm md:text-base tabular-nums">{currentSlideIndex + 1}</span>
          <span className="mx-1.5 md:mx-2 opacity-30 text-xs md:text-base">/</span>
          <span className="font-medium opacity-70 text-sm md:text-base tabular-nums">{slides.length}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
