<template>
  <div class=" bg-[#b2ceff]">
    테이블
    
  </div>
  </template>
  
  <script>
  export default {
    name: 'ProgressCircle',
    props: {
      percentage: {
        type: Number,
        default: 56
      }
    }
  }
  </script>
  
  <style scoped>
  .circular-chart {
    width: 100%;
    max-width: 150px; /* 원하는 크기 조정 */
  }
  .circle-bg {
    stroke: #eee; /* 배경 색상 */
  }
  .circle {
    transition: stroke-dasharray 0.6s ease; /* 애니메이션 효과 */
  }
  </style>
  