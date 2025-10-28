import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
	{
		name: 'Ania & Piotr',
		location: 'Wielkie Miasto',
		text: 'Najlepsze miejsce na ucieczkę od miejskiego zgiełku. Konie są wspaniałe, a jedzenie... mmm! Już planujemy kolejny przyjazd na jesień.',
	},
	{
		name: 'Rodzina Nowak',
		location: 'Stare Miasto',
		text: 'Z dziećmi spędziliśmy tutaj tydzień i było absolutnie magicznie. Warsztaty serowarskie, jazda konna, ogniska. Dzieci nie chciały wyjeżdżać!',
	},
	{
		name: 'Magda K.',
		location: 'Gdańsk',
		text: 'Weekend detox przekroczył moje oczekiwania. Joga o wschodzie słońca z widokiem na Beskidy to coś niesamowitego. Czuję się jak nowo narodzona.',
	},
	{
		name: 'Tomasz W.',
		location: 'Poznań',
		text: 'Jako fotograf jestem wybredny jeśli chodzi o widoki. Tutaj każdy kąt to gotowa pocztówka. Warsztaty fotografii z lokalnym fotografem - mistrzostwo!',
	},
	{
		name: 'Karolina & Michał',
		location: 'Wrocław',
		text: 'Świętowaliśmy tutaj rocznicę ślubu. Romantyczna kolacja przy kominku, spacery o zachodzie słońca... Nie mogliśmy sobie wymarzyć lepszego miejsca.',
	},
	{
		name: 'Ewa M.',
		location: 'Łódź',
		text: 'Jestem wegetarianką i martwił mnie wybór potraw. Niepotrzebnie! Pani Kasia przygotowywała przepyszne wegetariańskie dania z własnego ogrodu.',
	},
	{
		name: 'Jan K.',
		location: 'Szczecin',
		text: 'Nordic walking z instruktorem po beskidzkich szlakach to najlepszy sposób na aktywny wypoczynek. Polecam każdemu miłośnikowi gór!',
	},
	{
		name: 'Marta S.',
		location: 'Toruń',
		text: 'Przyjechałam sama potrzebując chwili wytchnienia. Dostałam znacznie więcej - spokój, piękno natury i nowych znajomych.',
	},
]

const TestimonialsSection = () => {
	const sectionRef = useRef<HTMLDivElement>(null)
	const carouselRef = useRef<HTMLDivElement>(null)
	const [isPaused, setIsPaused] = useState(false)

	const handleMouseEnter = () => {
		setIsPaused(true)
	}

	const handleMouseLeave = () => {
		setIsPaused(false)
	}

	const handleClick = () => {
		setIsPaused(!isPaused)
	}

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Initial fade in
			gsap.from(sectionRef.current, {
				opacity: 0,
				y: 50,
				duration: 0.8,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 70%',
				},
			})
		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<section ref={sectionRef} className="relative py-32 bg-stone-900 overflow-hidden">
			{/* Decorative Elements */}
			<div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full opacity-15 blur-3xl"></div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="text-center mb-20">
					<span className="text-accent text-sm uppercase tracking-wider font-semibold">Opinie Gości</span>
					<h2 className="mt-4 mb-6 text-4xl md:text-5xl font-bold text-white">Co Mówią Nasi Goście?</h2>
					<p className="text-stone-300 text-lg max-w-2xl mx-auto">
						Prawdziwe historie, prawdziwe emocje. Ponad 500 gości odwiedziło Sielską Ostoję w ostatnim roku.
					</p>
				</div>

				{/* Continuous Carousel */}
				<div className="relative w-full md:px-8 py-12 pb-24">
					{/* Cards Container */}
					<div className="overflow-hidden py-8 pb-24">
						<div
							ref={carouselRef}
							className="flex gap-8 cursor-pointer"
							style={{
								width: `${testimonials.length * 400}px`,
								animation: `scroll-testimonials 60s linear infinite`,
								animationPlayState: isPaused ? 'paused' : 'running',
							}}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							onClick={handleClick}>
							{/* Duplicate testimonials for seamless loop */}
							{[...testimonials, ...testimonials].map((testimonial, index) => (
								<div key={index} className="w-80 flex-shrink-0">
									<div className="bg-stone-800 p-6 rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105 border border-stone-700 relative h-full">
										{/* Quote Icon */}
										<div className="absolute -top-3 -right-3 bg-accent rounded-full p-2 shadow-lg">
											<Quote className="w-4 h-4 text-white" />
										</div>

										{/* Text */}
										<p className="text-stone-200 mb-4 leading-relaxed text-sm">"{testimonial.text}"</p>

										{/* Author */}
										<div className="flex items-center gap-3 pt-3 border-t border-stone-700">
											<div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
												{testimonial.name.charAt(0)}
											</div>
											<div>
												<p className="font-semibold text-white text-sm">{testimonial.name}</p>
												<p className="text-xs text-stone-400">{testimonial.location}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TestimonialsSection
