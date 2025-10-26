import { Urbanist } from "next/font/google"

const urbanist = Urbanist({
  subsets: ["latin"],
})

function FeatureSection() {
    return (
        <section className='max-w-7xl mx-auto'>
            <h1 className={`${urbanist.className} text-4xl`}>Why choose Easy Pay for effortless payments?</h1>
        </section>
    )
}

export default FeatureSection