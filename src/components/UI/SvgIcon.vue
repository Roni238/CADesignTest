<template>
    <svg
      :width="w"
      :height="h"
      :stroke="stroke"
      class="svg-icon"
    >
      <use :xlink:href="`/icons.svg#${icon}`"></use>
    </svg>
  </template>
  
  <script>
  export default {
    name: "svg-icon",
    props: {
      icon: {
        type: String,
        required: true,
      },
      w: {
        type: [String, Number],
        default: "100",
      },
      h: {
        type: [String, Number],
        default: "100",
      },
      stroke: {
        type: String
      }
    },
  };
  </script>
  
  <style scoped>
  .svg-icon {
    display: inline-block;
    vertical-align: middle;
  }
  </style>
  