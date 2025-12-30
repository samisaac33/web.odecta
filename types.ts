
export interface SlideProps {
  onNext: () => void;
  onPrev: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export enum SlideType {
  Cover = 'COVER',
  Summary = 'SUMMARY',
  Connectivity = 'CONNECTIVITY',
  Zoning = 'ZONING',
  Stage1 = 'STAGE1',
  Stage2 = 'STAGE2',
  Commercial = 'COMMERCIAL',
  Residential = 'RESIDENTIAL',
  Ecotourism = 'ECOTOURISM',
  Financials = 'FINANCIALS',
  Closing = 'CLOSING'
}
