/*
*   To convert a hexadecimal color string into an equivalent rgb value
*/
export const h2r = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null
}

/*
*   To convert an rgb value representing color into a hexadecimal equivalent
*/
export const r2h = rgb => "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1)

/*
*   To implement interpolation between start color and end color and return the resultant rgb value
*/
export const interpolateHSL = (color1, color2, factor = 0.5) => {

    const hsl1 = rgb2hsl(color1),
        hsl2 = rgb2hsl(color2)
    for (let i = 0; i < 3; i++) {
        hsl1[i] += factor * (hsl2[i] - hsl1[i])
    }
    return hsl2rgb(hsl1);
}

const rgb2hsl = color => {
    const r = color[0] / 255,
        g = color[1] / 255,
        b = color[2] / 255,
        max = Math.max(r, g, b),
        min = Math.min(r, g, b)
    let h, s, l = (max + min) / 2

    if (max === min) {
        h = s = 0
    } else {
        var d = max - min
        s = (l > 0.5 ? d / (2 - max - min) : d / (max + min))
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0)
                break
            case g:
                h = (b - r) / d + 2
                break
            case b:
                h = (r - g) / d + 4
                break
            default: h = 0
                break
        }
        h /= 6
    }

    return [h, s, l]
}

const hsl2rgb = (color) => {
    let l = color[2]

    if (color[1] === 0) {
        l = Math.round(l * 255)
        return [l, l, l]
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1
            if (t > 1) t -= 1
            if (t < 1 / 6) return p + (q - p) * 6 * t
            if (t < 1 / 2) return q
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
            return p;
        },
            s = color[1],
            q = (l < 0.5 ? l * (1 + s) : l + s - l * s),
            p = 2 * l - q,
            r = hue2rgb(p, q, color[0] + 1 / 3),
            g = hue2rgb(p, q, color[0]),
            b = hue2rgb(p, q, color[0] - 1 / 3)

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
    }
}

