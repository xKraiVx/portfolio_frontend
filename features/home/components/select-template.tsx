import { FunctionComponent, ReactNode } from "react"
import dynamic from "next/dynamic"
import { HomePWNormalized } from "@common/types/home-page"

type DynamicTemplate = (w: HomePWNormalized) => ReactNode

export const selectTemplate: DynamicTemplate = (w) => {

  const templateName = w.name

  const DynamicTemplate = dynamic(import(`@features/home/widgets/${templateName}`)) as FunctionComponent<{ widgetData: HomePWNormalized }>

  return (
    <DynamicTemplate key={w.id} widgetData={w} />
  )
}