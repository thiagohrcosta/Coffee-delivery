import { BannerContainer, BannerIcons, HomeIconsContainer } from "./styles";

import CoffeeBanner from "../../../../assets/images/coffee_banner.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export default function Banner() {
  return (
    <BannerContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
        <div className="banner-items">
          <HomeIconsContainer>
            <BannerIcons color={"yellow-900"}>
              <ShoppingCart weight="fill" size={24} color="#ffffff" />
            </BannerIcons>
            <p>Compra simples e segura</p>
          </HomeIconsContainer>
          <HomeIconsContainer>
            <BannerIcons color={"yellow-500"}>
              <Timer size={24} weight="fill" color="#ffffff" />
            </BannerIcons>
            <p>Entrega rápida e rastreada</p>
          </HomeIconsContainer>
          <HomeIconsContainer>
            <BannerIcons color={"purple-500"}>
              <Package size={24} color="#ffffff" />
            </BannerIcons>
            <p>Embalagem mantém o café intacto</p>
          </HomeIconsContainer>
          <HomeIconsContainer>
            <BannerIcons color={"gray-600"}>
              <Coffee size={24} color="#ffffff" />
            </BannerIcons>
            <p>O café chega fresquinho até você</p>
          </HomeIconsContainer>
        </div>
      </div>
      <div>
        <img src={CoffeeBanner} alt="Banner" />
      </div>
    </BannerContainer>
  )
}
