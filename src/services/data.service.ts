import type { LandingPageData } from "@/config/landing.interface";
import landingData from "@/data/landing.json";

export const getLandingData = async (): Promise<LandingPageData> => {
  const data: LandingPageData = landingData;
  return data;
};


import type { WebPageData } from "@/config/web.interface";
import webData from "@/data/web.json";

export const getWebData = async (): Promise<WebPageData> => {
  const data: WebPageData = webData;
  return data;
};
