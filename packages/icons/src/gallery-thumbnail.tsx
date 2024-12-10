import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGalleryThumbnail = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M120-185q-40.213 0-67.606-27.394Q25-239.788 25-280v-401q0-38.75 27.394-66.375Q79.787-775 120-775h401q38.75 0 66.375 27.625T615-681v401q0 40.212-27.625 67.606Q559.75-185 521-185zm600-320q-23.375 0-39.188-15.812Q665-536.625 665-560v-160q0-23.375 15.812-39.188Q696.625-775 720-775h160q23.375 0 39.188 15.812Q935-743.375 935-720v160q0 23.375-15.812 39.188Q903.375-505 880-505zm32-87h96v-96h-96zM112-272h416v-416H112zm70.818-88h274.364q6.318 0 9.568-6.5T466-379l-81.169-108.253Q381.154-491 375.308-491T365-487l-65 87-46-60q-2.615-4-8.808-4-6.192 0-9.957 3.647L174-379q-4 6-.75 12.5t9.568 6.5M720-185q-23.375 0-39.188-15.812Q665-216.625 665-240v-160q0-23.375 15.812-39.188Q696.625-455 720-455h160q23.375 0 39.188 15.812Q935-423.375 935-400v160q0 23.375-15.812 39.188Q903.375-185 880-185zm32-87h96v-96h-96zm-640 0v-416zm640-320v-96zm0 320v-96z" />
  </Svg>
);