import Layout from "../components/Layout";
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
  }
const Blog = () => (
    <Layout>
        <h1>BLOGhello world</h1>
    </Layout>
)

export default Blog;