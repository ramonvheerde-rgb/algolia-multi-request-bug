interface HitProps {
  hit: any;
}

export function Hit({ hit }: HitProps) {
  return <pre>{hit.name}</pre>;
}
