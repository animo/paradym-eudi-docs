import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { Card } from './components/Card'
import { Cards } from 'nextra/components'

const docsComponents = getDocsMDXComponents()

export const useMDXComponents = (components) => ({
  ...docsComponents,
  ...components,
  Card,
  Cards,
})
