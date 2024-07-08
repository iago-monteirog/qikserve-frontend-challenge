import { memo, useContext, useState } from 'react'
import { CarrouselBox, CarrouselCard, CardBadge } from './styles'
import { MenuContext } from '../../../../contexts/MenuContext'
interface CarrouselProps {
  scrollToSection: (sectionId: number) => void;
}

const CarrouselComponent = ({ scrollToSection }: CarrouselProps) => {
  const { menuData } = useContext(MenuContext);
  const [selectedSection, setSelectedSection] = useState<number | null>(null)

  const carrouselMenuSections = menuData?.sections

  const handleSectionClick = (sectionId: number) => {
    setSelectedSection(sectionId);
    scrollToSection(sectionId);
  }

  return (
    <CarrouselBox>
      {carrouselMenuSections?.map(section => {
        const imageSrc = section.images && section.images.length > 0 ? section.images[0]?.image ?? "" : ""
        return (
          <CarrouselCard key={section.id}
            onClick={() => handleSectionClick(section.id)}
            isSelected={selectedSection === section.id}
          >
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

export const Carrousel = memo(CarrouselComponent)
