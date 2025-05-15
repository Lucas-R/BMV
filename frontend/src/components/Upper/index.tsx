import { faWhatsapp, faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../Container";

interface LinkProps {
    children: React.ReactNode
    to: string
}

function Link({ children, to }: LinkProps) {
    return (
        <a className="flex items-center justify-center gap-x-1 text-white text-sm uppercase px-2" href={to}>
            { children }
        </a>
    )
}

export default function Upper() {
    return (
        <div className="bg-primary">
            <Container py="sm" className="grid grid-cols-2 gap-x-4 xl:flex xl:justify-end">
                <div className="flex items-center justify-center">
                    <Link to="#"><FontAwesomeIcon className="size-7 md:size-5" icon={faFacebook} /></Link>
                    <Link to="#"><FontAwesomeIcon className="size-7 md:size-5" icon={faInstagram} /></Link>
                    <Link to="#"><FontAwesomeIcon className="size-7 md:size-5" icon={faYoutube} /></Link>
                </div>

                <Link to="#"><FontAwesomeIcon className="size-7 md:size-5" icon={faWhatsapp} /> fale conosco </Link>
            </Container>
        </div>
    )
}