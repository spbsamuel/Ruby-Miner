import React from 'react'
import ContentLoader from "react-content-loader"

function PageLoader() {
  return (
    <ContentLoader
      height={200}
      width={300}
      speed={2}
      primaryColor={"#f3f3f3"}
      secondaryColor={"#ecebeb"}
    >
      <rect x="3" y="1" rx="3" ry="3" width="70" height="10"/>
      <rect x="2" y="20" rx="3" ry="3" width="300" height="10"/>
      <rect x="15" y="40" rx="3" ry="3" width="260" height="10"/>
      <rect x="15" y="60" rx="3" ry="3" width="200" height="10"/>
      <rect x="2" y="80" rx="3" ry="3" width="300" height="10"/>
      <rect x="15" y="100" rx="3" ry="3" width="260" height="10"/>
      <rect x="15" y="120" rx="3" ry="3" width="200" height="10"/>
    </ContentLoader>
  )
}

export default PageLoader