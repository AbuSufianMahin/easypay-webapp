"use client"
import CountUp from "react-countup"

interface NumberCountUpProps {
  number: number
  points?: number
  duration?: number
  prefix?: string
  suffix?: string
}

export default function NumberCountUp({ number, duration = 2, points, prefix = "", suffix = ""}: NumberCountUpProps) {
  return (
    <CountUp
      end={number}
      duration={duration}
      decimals={points}
      prefix={prefix}
      suffix={suffix}
      separator=","
    />
  )
}
