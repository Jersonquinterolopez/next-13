import Counter from './counter'

export async function generateStaticParams() {
  return [
    {
      slug: 'stream',
    },
  ]
}

export default function IndividualBlogPage() {
  return (
    <div>
      <h1>A live stream </h1>
      <Counter />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque cum
        nam corporis libero magnam a et unde aspernatur aut fugit repellendus
        esse, ut ducimus ratione aliquid dolores voluptate? Esse?
      </p>
    </div>
  )
}
