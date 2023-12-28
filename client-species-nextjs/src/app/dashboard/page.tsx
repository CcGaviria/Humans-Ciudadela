
import Header from '@/components/Header';
import ItemCardEspecie from '@/components/ItemCardEspecie';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header title="ESPECIES RICK AND MORTY"></Header>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left flex justify-center align-center">
        <ItemCardEspecie title="Humanos" linkTo="/humans" description="Los humanos somos la especie de primate más abundante y extendida en la Tierra, caracterizados por el bipedalismo y cerebros grandes y complejos."></ItemCardEspecie>
      </div>
    </main>

  )
}