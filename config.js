export const config = {
  domainSource: "https://www.listing.scspectrum.com", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/advisor-profile/[^/]+",
          metaDataEndpoint: "https://api.scspectrum.com/api:zYtd8tQ9:v2/advisor/{uuid}/metadata"
      },
      {
          pattern: "/facility/california/[^/]+/[^/]+/[^/]+",
          metaDataEndpoint: "https://api.scspectrum.com/api:zYtd8tQ9:v2/facilities/metadata/{facilities_id}"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
