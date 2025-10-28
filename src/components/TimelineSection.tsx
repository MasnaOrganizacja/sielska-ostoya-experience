import { Timeline } from '@/components/ui/timeline'

export default function TimelineSection() {
	const data = [
		{
			title: 'Dzień 1',
			content: (
				<div>
					<h4 className="text-2xl font-bold text-white mb-4">Przyjazd i Powitanie</h4>
					<p className="mb-8 text-sm font-normal text-stone-300 md:text-base">
						Ciepłe powitanie przez gospodarzy, prezentacja terenu rancza i wprowadzenie do atmosfery beskidzkiego życia.
						Otrzymasz mapę okolicy i plan aktywności.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<img
							src="/images/large/farmhouse1-l.webp"
							alt="Powitanie"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64"
						/>
						<img
							src="/images/large/view-l.webp"
							alt="Widok na Beskidy"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64 hidden md:block"
						/>
					</div>
				</div>
			),
		},
		{
			title: 'Dzień 2',
			content: (
				<div>
					<h4 className="text-2xl font-bold text-white mb-4">Poznanie Zwierząt</h4>
					<p className="mb-8 text-sm font-normal text-stone-300 md:text-base">
						Pierwsza wizyta w stajni i poznanie naszych koni, osiołków, krów i innych mieszkańców rancza. Możliwość
						karmienia i głaskania zwierząt.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<img
							src="/images/large/donkeys-l.webp"
							alt="Osiołki"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64"
						/>
						<img
							src="/images/large/cow-l.webp"
							alt="Krowy"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64 hidden md:block"
						/>
					</div>
				</div>
			),
		},
		{
			title: 'Dzień 3',
			content: (
				<div>
					<h4 className="text-2xl font-bold text-white mb-4">Aktywności na Świeżym Powietrzu</h4>
					<p className="mb-8 text-sm font-normal text-stone-300 md:text-base">
						Czas na wybrane aktywności - jazda konna, nordic walking, wycieczki rowerowe lub relaks w otoczeniu natury.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<img
							src="/images/large/bike-l.webp"
							alt="Rowery"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64"
						/>
						<img
							src="/images/large/hike-l.webp"
							alt="Trekking"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64 hidden md:block"
						/>
					</div>
				</div>
			),
		},
		{
			title: 'Dzień 4',
			content: (
				<div>
					<h4 className="text-2xl font-bold text-white mb-4">Warsztaty i Tradycje</h4>
					<p className="mb-8 text-sm font-normal text-stone-300 md:text-base">
						Udział w warsztatach serowarskich, poznanie tradycyjnych metod wytwarzania sera podhalańskiego i innych
						lokalnych produktów.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<img
							src="/images/large/chickens-l.webp"
							alt="Gospodarstwo"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64"
						/>
						<img
							src="/images/large/field1-l.webp"
							alt="Pole"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64 hidden md:block"
						/>
					</div>
				</div>
			),
		},
		{
			title: 'Dzień 5',
			content: (
				<div>
					<h4 className="text-2xl font-bold text-white mb-4">Relaks i Regeneracja</h4>
					<p className="mb-8 text-sm font-normal text-stone-300 md:text-base">
						Dzień na odpoczynek, łowienie ryb w prywatnym stawie, spacery po okolicy i cieszenie się ciszą beskidzkich
						lasów.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<img
							src="/images/large/fishing-l.webp"
							alt="Łowienie ryb"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64"
						/>
						<img
							src="/images/large/nordicwalking-l.webp"
							alt="Nordic Walking"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64 hidden md:block"
						/>
					</div>
				</div>
			),
		},
		{
			title: 'Dzień 6',
			content: (
				<div>
					<h4 className="text-2xl font-bold text-white mb-4">Wieczorne Ognisko</h4>
					<p className="mb-8 text-sm font-normal text-stone-300 md:text-base">
						Wspólne ognisko z pieczeniem kiełbasek, opowieściami o Beskidach i obserwowaniem gwiaździstego nieba z dala
						od miejskich świateł.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<img
							src="/images/large/campfire-l.webp"
							alt="Ognisko"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64"
						/>
						<img
							src="/images/large/view2-l.webp"
							alt="Wieczorny widok"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64 hidden md:block"
						/>
					</div>
				</div>
			),
		},
		{
			title: 'Dzień 7',
			content: (
				<div>
					<h4 className="text-2xl font-bold text-white mb-4">Pożegnanie i Wspomnienia</h4>
					<p className="mb-8 text-sm font-normal text-stone-300 md:text-base">
						Pożegnanie z nowymi przyjaciółmi, zabierasz ze sobą domowy ser, niezapomniane wspomnienia i zaproszenie na
						kolejny pobyt.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<img
							src="/images/large/dom3-l.webp"
							alt="Willa Górska"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64"
						/>
						<img
							src="/images/large/dom1-l.webp"
							alt="Dom Rodzinny"
							width={500}
							height={300}
							className="h-48 w-full rounded-lg object-cover shadow-lg md:h-56 lg:h-64 hidden md:block"
						/>
					</div>
				</div>
			),
		},
	]

	return (
		<section className="py-20 bg-stone-900 relative">
			{/* Decorative Blur Elements */}
			<div className="absolute top-20 left-16 w-24 h-24 bg-accent rounded-full opacity-20 blur-3xl"></div>
			<div className="absolute top-40 right-24 w-32 h-32 bg-accent rounded-full opacity-15 blur-3xl"></div>
			<div className="absolute bottom-32 left-32 w-28 h-28 bg-accent rounded-full opacity-18 blur-3xl"></div>
			<div className="absolute top-1/2 right-16 w-36 h-36 bg-accent rounded-full opacity-12 blur-3xl"></div>
			<div className="absolute top-1/2 left-8 w-20 h-20 bg-accent rounded-full opacity-25 blur-3xl"></div>
			<div className="absolute top-3/4 right-32 w-22 h-22 bg-accent rounded-full opacity-16 blur-3xl"></div>
			<div className="absolute bottom-48 left-20 w-26 h-26 bg-accent rounded-full opacity-22 blur-3xl"></div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="text-center mb-16">
					<span className="text-accent text-sm uppercase tracking-wider font-semibold">Twoja Przygoda</span>
					<h2 className="mt-4 mb-6 text-4xl md:text-5xl font-bold text-white">7 Dni w Sielskiej Ostoi</h2>
					<p className="text-stone-300 text-lg max-w-2xl mx-auto">
						Od przyjazdu po niezapomniane wspomnienia - tak wygląda typowy pobyt w naszym ranczu.
					</p>
				</div>
			</div>

			<div className="relative w-full">
				<Timeline data={data} />
			</div>
		</section>
	)
}
