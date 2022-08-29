import { BannerContainer, BannerIcons, HomeIconsContainer } from "./styles";

import CoffeeBanner from "../../../../assets/images/coffee_banner.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import HomeIcons from "../HomeIcons";

export default function Banner() {
  return (
    <BannerContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
        <div className="banner-items">
          <HomeIcons
            color={"yellow-900"}
            icon={<ShoppingCart weight="fill" size={24} color="#ffffff" />}
            text={"Compra simples e segura"}
          />
          <HomeIcons
            color={"yellow-500"}
            icon={<Timer size={24} weight="fill" color="#ffffff" />}
            text={"Entrega rápida e rastreada"}
          />
          <HomeIcons
            color={"purple-500"}
            icon={<Package size={24} weight="fill" color="#ffffff" />}
            text={"Embalagem mantém o café intacto"}
          />
          <HomeIcons
            color={"gray-600"}
            icon={<Coffee size={24} weight="fill" color="#ffffff" />}
            text={"O café chega fresquinho até você"}
          />
        </div>
      </div>
      <div>
        <img src={CoffeeBanner} alt="Banner" />
      </div>
    </BannerContainer>
  )
}
