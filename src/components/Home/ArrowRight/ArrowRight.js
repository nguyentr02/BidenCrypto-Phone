import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowRight = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        fill="none"
        {...props}
    >
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m21 9 9 9m0 0-9 9m9-9H7.5"
        />
    </Svg>
)

export default ArrowRight
