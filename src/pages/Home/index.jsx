import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

import { Container } from "./style"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"

import { Card } from "../../components/Card"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";


export function Home() {
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchDishes(){
      const response = await api.get(`/dishes?title=${search}`)
      setDishes(response.data)
    }
    fetchDishes()
  }, [search])

  return (
    <Container>

      <Header search={setSearch}/>

      <div className="content-page">
        <main>
            <header>
              <figure className="banner">   
              </figure>
              <div className="title-subtitle">
                <h2>
                  Sabores inigualáveis
                </h2>
                <p>
                  Sinta o cuidado do preparo com ingredientes selecionados.
                </p>
              </div>
            </header>

           <Section title="Refeições">
              {
                dishes.filter(dish => dish.category === "dishes").length > 0 && 
                <Swiper 
                  loop={true}
                  loopfillgroupwithblank="true"
                  grabCursor={true}
                  breakpoints={{
                    420: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    },                             
                  }}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"                           
                >
                  {
                    dishes.filter(dish => dish.category == "dishes").map((item, index) => (
                      <SwiperSlide
                        key={String(index)}
                      >
                        <Card 
                            data={item}
                        />
                      </SwiperSlide>
                    ))
                  }
                                   
                </Swiper>
              }
              
          </Section>


          <Section title="Bebidas">
              {
                dishes.filter(dish => dish.category === "drink").length > 0 && 
                <Swiper 
                  loop={true}
                  loopFillGroupWithBlank={true}
                  grabCursor={true}
                  breakpoints={{
                    420: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    },                             
                  }}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"                           
                >
                  {
                    dishes.filter(dish => dish.category == "drink").map((item, index) => (
                      <SwiperSlide
                        key={String(index)}
                      >
                        <Card 
                            data={item}
                        />
                      </SwiperSlide>
                    ))
                  }
                                   
                </Swiper>
              }
              
          </Section>

          <Section title="Sobremesas">
              {
                dishes.filter(dish => dish.category === "dessert").length > 0 && 
                <Swiper 
                  loop={true}
                  loopFillGroupWithBlank={true}
                  grabCursor={true}
                  breakpoints={{
                    420: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    },                             
                  }}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"                           
                >
                  {
                    dishes.filter(dish => dish.category == "dessert").map((item, index) => (
                      <SwiperSlide
                        key={String(index)}
                      >
                        <Card 
                            data={item}
                        />
                      </SwiperSlide>
                    ))
                  }
                                   
                </Swiper>
              }
              
          </Section>
            
        </main>

        <Footer />
      </div>        
    </Container>
  )
}