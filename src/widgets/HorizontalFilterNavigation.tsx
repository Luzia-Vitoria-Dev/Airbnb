'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import { IconAdjustmentsHorizontal } from "@/assets/icons"
import ButtonIcon from "@/components/ButtonIcon"
import Link from "next/link"
import Image from "next/image"
import { Icons } from "@/types/AirbnbData"

interface HorizontalFilterNavigationProps {
  icons: Icons[]
}

const HorizontalFilterNavigation = (
  props: HorizontalFilterNavigationProps
) => {
  const iconList = props.icons
    return ( 
        <>
            <div className="flex flex-row items-center">
                {/* Filter Icon */}
                <Swiper
                spaceBetween={10}
                slidesPerView={3}
                breakpoints={{
                    640: {slidesPerView: 3},
                    764: {slidesPerView: 4},
                    1024: {slidesPerView: 6},
                    1280: {slidesPerView: 9},
                }}
                >

                    {iconList.map((icon, indice)=>(
                        <SwiperSlide key={indice}>
                            <Link href={icon.url} className="flex flex-col items-center hover:text-red-500">
                                <Image
                                src={icon.source}
                                alt={icon.description}
                                width={24}
                                height={24}
                                />
                                <span className="text-sm">{icon.description}</span>
                            </Link>
                        </SwiperSlide>
                    ))}

                </Swiper>

                {/* Filter Navigation */}
                <ButtonIcon 
                icon={(
                    <IconAdjustmentsHorizontal
                    aria-label="User Icon"
                    size={20}
                    />
                )}>
                Filtros
                </ButtonIcon>
            </div>
        </>
    )
}

export default HorizontalFilterNavigation