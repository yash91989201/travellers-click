export type Region = "all" | "India" | "International";

export interface DiscoverySelection {
	preferences: string;
	region: Region;
}
