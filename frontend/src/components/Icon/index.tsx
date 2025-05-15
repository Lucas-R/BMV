import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

interface IconProps extends FontAwesomeIconProps  {}

export default function Icon({ ...rest }: IconProps) {
    return (
        <FontAwesomeIcon {...rest}/>
    )
}