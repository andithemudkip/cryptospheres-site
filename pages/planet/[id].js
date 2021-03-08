import { useRouter } from 'next/router';

const Planet = () => {
  const router = useRouter ();
  const { id } = router.query;

  return <p>planet: {id}</p>
}

export default Planet;