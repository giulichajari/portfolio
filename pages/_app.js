import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '../global.css'
export async function getServerSideProps() {
  // Aquí puedes manejar la lógica para mostrar una página de error personalizada para el error 404
  return {
    props: {}, // No es necesario devolver ninguna prop
  }
}


export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }