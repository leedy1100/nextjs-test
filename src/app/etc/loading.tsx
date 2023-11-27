import React from "react";
import ContentLoader from "react-content-loader";

export default function loading() {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 410 410"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
    >
      <rect x="5" y="0" rx="0" ry="0" width="400" height="400" />
    </ContentLoader>
  );
}
