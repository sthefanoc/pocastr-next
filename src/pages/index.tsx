export default function Home() {
  return (
    <h1>Index</h1>
  )
}

// export async function getServerSideProps() {
export async function getStaticProps() {
  const response = await fetch('http://localhos:3333/episodes')
  const data = await response.json()

  return{
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
