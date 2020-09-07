import React from "react"
import Header from "./index"

import logo from "../../images/Petlab-logo.png"

export default {
  title: "Header",
  component: Header,
}
const Template = args => {
  return <Header {...args} />
}

export const Default = Template.bind({})
Default.args = {
  logoPosition: "left",
  logo: {
    aspectRatio: 4.473684210526316,
    base64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAjUlEQVQY05WOQQoCMQxFW0VwIYpQFMZZtAgjLnQhuG1P0Nz/OL7fKYKICwOPpMnPb1ws5v6J9EP/0ecRYMR8JK/hkHLdx2xbWKZsR9jQvzZ9bprQtNkGCL3/NpxggAfs4MxQ5hfyivyEE9S+GGDq2jvcOMB/nasfVDOcKbZIpbo4116oVujyvutlJp3iBXwXJpWT4bHDAAAAAElFTkSuQmCC",
    height: 38,
    originalName: "Petlab-logo.png",
    src: logo,
    srcSet: "",
    tracedSVG:
      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='89'%20viewBox='0%200%20400%2089'%20preserveAspectRatio='none'%3e%3cpath%20d='M37%2031l-1%2014c0%2013%200%2014%202%2014s2-1%202-14c0-14%200-15%205-14%204%201%206%206%204%2011%200%203-1%204-4%204l-3%201h3c9%200%2012-12%204-16H37m35%2014v14h9l8-1H76V44h10l-5-1h-5V31l6%201%206-1-8-1h-8v15m34-14l3%201%203-1v21c0%207%200%207%202%207s2-1%202-14l1-13h3l3-1-8-1-9%201m36%2014v14h8l8-1h-12V44c0-13%200-14-2-14s-2%201-2%2015m43-14l-11%2028%203-7%203-5h9l2%206c2%205%203%206%205%206%203%200%203%202-4-15-6-15-5-14-7-13m32-1v15l1%2014c2%200%202-2%202-14l1-13%202-1c7-1%208%209%202%2012l-3%201h3c6%200%209%2010%204%2013l-2%202h2c3%200%206-3%206-7s-3-8-5-8l1-2c5-6%201-12-8-12h-6m70%202c-10%206-8%2024%204%2027%204%201%2011%200%2012-1h-3c-9%202-15-3-15-14%200-6%202-10%205-12%203-1%208-1%2011%201h2c2-3-11-4-16-1m40%200c-4%203-6%207-6%2014%202%2019%2028%2018%2028-1%200-12-12-19-22-13m3%200c-4%202-6%2014-3%2021%204%209%2016%207%2018-4%201-13-6-21-15-17'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",
    width: 170,
  },
  headerText: "Advertorial",
}

export const CenterLogo = Template.bind({})
CenterLogo.args = {
  ...Default.args,
  logoPosition: "center",
  headerText: "",
}
