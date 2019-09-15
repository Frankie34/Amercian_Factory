export default {
  title: {
    text: 'Performance loss distribution',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Step A', 'Step B', 'Step C-1', 'Step C-2', 'Step D']
  },
  series: [
    {
      name: 'Loss',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Step A' },
        { value: 310, name: 'Step B' },
        { value: 234, name: 'Step C-1' },
        { value: 135, name: 'Step C-2' },
        { value: 1548, name: 'Step D' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
