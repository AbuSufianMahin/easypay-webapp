"use client"
import Lottie from "lottie-react";
import error404Lottie from "../assets/animation/404Error.json"
function NotFound() {
  return (
    <section className='max-w-7xl mx-auto'>
      <div className='mx-4 md:mx-6 2xl:mx-0'>
        <Lottie animationData={error404Lottie} className="h-[70vh]"></Lottie>
      </div>
    </section>
  )
}

export default NotFound;