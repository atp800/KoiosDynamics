// Homepage
import type { LandingPageData } from "@/config/landing.interface";
import landingData from "@/data/landing.json";

export const getLandingData = async (): Promise<LandingPageData> => {
  const data: LandingPageData = landingData;
  return data;
};


// Web Development
import type { WebPageData } from "@/config/web.interface";
import webData from "@/data/web.json";

export const getWebData = async (): Promise<WebPageData> => {
  const data: WebPageData = webData;
  return data;
};


// Analytics and Dashboards
import type { AnalyticsPageData } from "@/config/analytics.interface";
import analyticsData from "@/data/analytics.json";

export const getAnalyticsData = async (): Promise<AnalyticsPageData> => {
  const data: AnalyticsPageData = analyticsData;
  return data;
};


// Data science and AI modelling
import type { AIPageData } from "@/config/ai.interface";
import aiData from "@/data/ai.json";

export const getAIData = async (): Promise<AIPageData> => {
  const data: AIPageData = aiData;
  return data;
};


// Programming
import type { CodingPageData } from "@/config/coding.interface";
import codingData from "@/data/coding.json";

export const getCodingData = async (): Promise<CodingPageData> => {
  const data: CodingPageData = codingData;
  return data;
};

