export interface CommunityItem {
  name: string;
  platforms: string;
  category: string;
  img_url: string;
  link_url: string;
}

export interface CommunityResponse {
  data: CommunityItem[];
}