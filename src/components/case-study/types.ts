export interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
  delta: string;
  improvement: "positive" | "negative";
}

export interface CaseStudyLayoutProps {
  slug: string;
  title: string;
  description: string;
  industry: string;
  timeline: string;
  problemNarrative: React.ReactNode;
  architectureViewer: React.ReactNode;
  interventionNarrative: React.ReactNode;
  metrics: CaseStudyMetric[];
  outcomeNarrative: React.ReactNode;
}
