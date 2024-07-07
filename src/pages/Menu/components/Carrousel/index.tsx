import { useContext } from 'react'
import { CarrouselBox, CarrouselCard, CardBadge } from './styles'
import { MenuContext } from '../../../../contexts/MenuContext'

export const Carrousel = () => {
  const { menuData } = useContext(MenuContext);

  const carrouselMenuSections = menuData?.sections

  return (
    <CarrouselBox>
      {carrouselMenuSections?.map(section => {
        const imageSrc = section.images && section.images.length > 0 ? section.images[0]?.image ?? "" : ""
        return (
          <CarrouselCard key={section.id}>
            <CardBadge>
              <img
                src={imageSrc}
                alt={section.name}
              />
            </CardBadge>

            <p>{section.name}</p>
          </CarrouselCard>
        )
      })}
    </CarrouselBox>
  )
}
