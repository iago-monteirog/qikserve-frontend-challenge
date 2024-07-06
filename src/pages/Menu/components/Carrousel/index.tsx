import { CarrouselBox, CarrouselCard, CardBadge } from './styles'

export const Carrousel = () => {
  return (
    <CarrouselBox>
      <CarrouselCard>
        <CardBadge>
          <img
            src="https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png"
            alt=""
          />
        </CardBadge>

        <p>Burguers</p>
      </CarrouselCard>
      <CarrouselCard>
        <CardBadge>
          <img
            src="https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png"
            alt=""
          />
        </CardBadge>

        <p>Burguers</p>
      </CarrouselCard>
      <CarrouselCard>
        <CardBadge>
          <img
            src="https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png"
            alt=""
          />
        </CardBadge>

        <p>Burguers</p>
      </CarrouselCard>
    </CarrouselBox>
  )
}
