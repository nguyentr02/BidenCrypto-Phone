import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Currency = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} {...props}>
        <Path
            style={{
                stroke: "none",
                // fillRule: "nonzero",
                fill: "#ffbe55",
                fillOpacity: 1,
            }}
            d="M26.25 8.75v2.918H11.668A5.833 5.833 0 0 0 5.832 17.5v5.832h58.336V17.5a5.833 5.833 0 0 0-5.836-5.832H43.75V8.75ZM5.832 29.168V52.5a5.838 5.838 0 0 0 5.836 5.832h46.664a5.838 5.838 0 0 0 5.836-5.832V29.168h-8.75v2.914H43.75v-2.914h-17.5v2.914H14.582v-2.914Zm0 0"
        />
    </Svg>
)

export default Currency
