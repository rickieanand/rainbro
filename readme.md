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

<PieChart width={340} height={400}>
    <Pie
        data={PiechartData}
        cx={150}
        cy={150}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
    >
        {
            PiechartData?.map((entry, index) => {

                const startColor = h2r('#85929E')
                const endColor = h2r('#17202A')
                const icol = interpolateHSL(startColor, endColor, (1 / PiechartData.length) * index)
                const hcol = r2h(icol)
                return <Cell key={`cell-${index}`} entry={entry} fill={hcol} />
            })
        }
    </Pie>
    <Tooltip />
    <Legend />
</PieChart>

```
## Suport
Please check the Github repo [package source](https://github.com/rickieanand/rainbrow/) for more details.