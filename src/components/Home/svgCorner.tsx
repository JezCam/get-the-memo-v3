import * as React from 'react'
const SVGCorner = (props: {
    a: string
    b: string
    c: string
    className?: string
}) => (
    <div className={props.className}>
        <svg
            width="122"
            height="129"
            viewBox="0 0 122 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M60.4642 61.7752L2.4082 27.9498C1.42962 29.6926 1.00855 31.7472 1.30486 33.833L8.94248 87.8773C9.28946 90.3257 10.5916 92.5401 12.5644 94.0295L17.4807 97.745L54.8306 125.991C56.4992 127.251 58.4837 127.882 60.4681 127.886V61.7752H60.4642Z"
                fill={props.a}
                stroke="hsl(var(--foreground))"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M2.4082 27.9498L60.4642 61.7752L119.581 27.4391C118.583 25.6769 117.019 24.2382 115.05 23.4156L64.8152 2.38194C62.4877 1.40725 59.8638 1.41505 57.5441 2.40143L34.8652 12.0352L6.91124 23.9146C4.95018 24.749 3.39458 26.1915 2.4082 27.9537V27.9498Z"
                fill={props.b}
                stroke="hsl(var(--foreground))"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M120.704 33.3535C121 31.256 120.571 29.1896 119.581 27.443L60.4643 61.7791V127.89C62.4487 127.89 64.4371 127.262 66.1057 126.003L77.5056 117.402L109.499 93.2653C111.475 91.7721 112.781 89.5576 113.128 87.1014L116.711 61.6739L120.704 33.3574V33.3535Z"
                fill={props.c}
                stroke="hsl(var(--foreground))"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </div>
)
export default SVGCorner
