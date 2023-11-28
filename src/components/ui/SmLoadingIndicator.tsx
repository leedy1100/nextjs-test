import React from "react";
import ContentLoader from "react-content-loader";

export default function SmLoadingIndicator() {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 200 235"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
    >
      <rect x="0" y="0" rx="5" ry="5" width="200" height="200" />
      <rect x="0" y="210" rx="3" ry="3" width="200" height="10" />
      <rect x="210" y="210" rx="3" ry="3" width="200" height="10" />
      <rect x="420" y="210" rx="3" ry="3" width="200" height="10" />
      <rect x="0" y="225" rx="3" ry="3" width="200" height="10" />
      <rect x="210" y="225" rx="3" ry="3" width="200" height="10" />
      <rect x="420" y="225" rx="3" ry="3" width="200" height="10" />
    </ContentLoader>
  );
}
