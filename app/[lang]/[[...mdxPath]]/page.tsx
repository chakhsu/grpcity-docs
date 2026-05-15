import { generateStaticParamsFor, importPage } from 'nextra/pages'
import type { FC } from 'react'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

type PageProps = Readonly<{
  params: Promise<{
    mdxPath: string[]
    lang: string
  }>
}>

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath, params.lang)
  // Home (no mdxPath segments) should render <title>gRPCity</title> verbatim,
  // bypassing the "%s - gRPCity Docs" template from app/[lang]/layout.tsx.
  if (!params.mdxPath || params.mdxPath.length === 0) {
    return {
      ...metadata,
      title: { absolute: typeof metadata?.title === 'string' ? metadata.title : 'gRPCity' }
    }
  }
  return metadata
}

const Wrapper = getMDXComponents().wrapper

const Page: FC<PageProps> = async props => {
  const params = await props.params
  const result = await importPage(params.mdxPath, params.lang)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}

export default Page
