import * as React from 'react'
const SVGEdge = (props: { a: string; b: string; className?: string }) => (
    <div className={props.className}>
        <svg
            width="292"
            height="248"
            viewBox="0 0 292 248"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M271.99 29.74L174.24 7.36996L151.04 2.05996C149.28 1.65996 147.48 1.45996 145.69 1.45996V246.54C146.19 246.54 146.7 246.53 147.2 246.49L195.7 243.5L268.11 239.03C280.77 238.25 290.63 227.76 290.63 215.08V53.14C290.63 41.95 282.89 32.24 271.98 29.74H271.99Z"
                fill={props.a}
                stroke="hsl(var(--foreground))"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M23.82 238.74L144.18 246.49C144.68 246.52 145.19 246.54 145.69 246.54V1.45996C143.89 1.45996 142.1 1.65996 140.34 2.05996L40.25 24.98L20.01 29.61C9.09999 32.11 1.35999 41.81 1.35999 53V214.79C1.35999 227.45 11.19 237.93 23.82 238.74Z"
                fill={props.b}
                stroke="hsl(var(--foreground))"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </div>
)
export default SVGEdge
