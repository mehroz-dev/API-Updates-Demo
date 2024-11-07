import React from "react"
import Svg, { Path } from "react-native-svg"

import { IconProps } from "."
export default function SnackLogo(props: IconProps) {
  const { color } = props
  return (
    <Svg viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.168 1.152a2.752 2.752 0 100 5.504 2.752 2.752 0 000-5.504zm-2.43 2.752a2.429 2.429 0 014.608-1.075 3.805 3.805 0 01-3.701 2.925h-.051a2.423 2.423 0 01-.855-1.85zm-1.755-1.422a.16.16 0 01.081.14v4.825L17.23 9.86c.05.029.081.082.082.14l.026 4.92a.16.16 0 01-.081.14l-8.52 4.92a.161.161 0 01-.242-.14V10c0-.057.03-.11.08-.14l4.006-2.319-4.005-2.32a.161.161 0 010-.28l4.246-2.458a.161.161 0 01.162 0zm3.845 7.517L13.064 7.82v4.36L16.828 10zM8.978 5.08l3.764 2.18V2.901l-3.763 2.18z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75.022a.161.161 0 00-.162 0l-4.242 2.46a.16.16 0 00-.019.01L.11 4.94l-.003.001a.161.161 0 00-.081.136v.004l-.013 4.994a.161.161 0 000 .125L0 14.92c0 .058.03.111.08.14l4.24 2.455.03.018 4.226 2.446a.161.161 0 00.242-.14v-9.746l4.166-2.412a.162.162 0 000-.28l-.081-.046V2.808l.08-.047a.162.162 0 000-.28L8.75.022zm3.828 2.597L8.67.35 4.74 2.626l3.917 2.267 3.922-2.275zM8.656 5.268L4.74 7.538l3.916 2.275L12.58 7.54 8.656 5.268zM4.419 7.352l3.915-2.27-3.916-2.268L.508 5.08 4.42 7.35zm-.165.277v4.692L.336 10.05l.012-4.69 3.906 2.268zm.323 4.879V7.817l3.918 2.275v4.685l-3.918-2.27zm-.323.186l-3.92-2.27-.01 4.403 3.93 2.276v-4.41zm.323 4.596v-4.41l3.918 2.27v4.408L4.577 17.29z"
        fill={color || "#000"}
      />
    </Svg>
  )
}
