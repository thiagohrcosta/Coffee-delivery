import { ShoppingCart } from "phosphor-react";
import { BannerIcons, HomeIconsContainer } from "./styles";

export default function HomeIcons(props: any) {
  return (
    <HomeIconsContainer>
      <BannerIcons color={props.color}>
        {props.icon}
      </BannerIcons>
      <p>{props.text}</p>
    </HomeIconsContainer>
  )
}
