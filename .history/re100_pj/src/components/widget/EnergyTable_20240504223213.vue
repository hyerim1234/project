<template>
  <div class=" bg-[#b2ceff]">
    <input type="text" placeholder="고객사 이름">
    <button type="button">검색</button>
  </div>
  <div>
    <table>
      <tr>
        <th>이름</th>
        <th>개소수</th>
        <th>용량</th>
        <th>형태</th>
        <th>달성률</th>
        <th>위치</th>
      </tr>
    </table>
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
  