import React from 'react'
export const svgCode = `<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="100%"
    height="100%"
    viewBox="0 0 1600 900"
    >
    <defs>
      <linearGradient id="bg" x2="0%" y2="100%">
        <stop
          offset="0%"
          style="stop-color: rgba(14, 95, 224, 0.9)"
        ></stop>
        <stop
          offset="100%"
          style="stop-color: rgba(38, 89, 190, 0.15)"
        ></stop>
      </linearGradient>
      <path
        id="wave"
        fill="url(#bg)"
        d="M-363.852,0c0,0,236.988,41.997,505.475,0
        s371.981,-38.998,575.971,0s293.985,39.278,505.474,-5.859s493.475,-48.368,716.963,4.995v-560.106H-363.852V0z"
      />
    </defs>
    <g>
      <use xlink:href="#wave" opacity=".3">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="8s"
          calcMode="spline"
          values="270 670; -334 720; 270 670"
          keyTimes="0; .5; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite"
        />
      </use>
      <use xlink:href="#wave" opacity=".6">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="6s"
          calcMode="spline"
          values="-270 670; 243 680; -270 670"
          keyTimes="0; .6; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite"
        />
      </use>
      <use xlink:href="#wave" opacity="1">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="4s"
          calcMode="spline"
          values="0 670; -140 700; 0 670"
          keyTimes="0; .4; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite"
        />
      </use>
    </g>
  </svg>`;
export const bgprojects = () => {
   
  
  return (
    <div>bgprojects</div>
  )
}
