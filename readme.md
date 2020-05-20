# Rainbro v1.0.0

This is a library to implement interpolation of various colors between start and end color. Mostly used for adding colors to charts to display intensity as the value raises or decreases.


## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i --save rainbro
```

## Usage
```
import { interpolateHSL, h2r, r2h } from 'rainbro'

...
...

<PieChart width={340} height={400}>
    <Pie data={PiechartData} cx={150} cy={150} dataKey="value">
        {
            PiechartData?.map((entry, index) => {
               const startColor = h2r('#85929E')
               const endColor = h2r('#17202A')
               const interpolatedColor = interpolateHSL(startColor, endColor, (1 / PiechartData.length) * index)
               const resultantColor = r2h(interpolatedColor)
               return <Cell key={`cell-${index}`} entry={entry} fill={resultantColor} />
            })
        }
    </Pie>
</PieChart>

```
## Support
Please check the Github repo [package source](https://github.com/rickieanand/rainbrow/) for more details.