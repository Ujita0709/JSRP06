import { atom, useAtom } from "jotai";

const priceAtom = atom(100);
const taxIncludedAtom = atom((get) => Math.floor(get(priceAtom) * 1.1));

function Price() {
  const [price] = useAtom(priceAtom);
  const [taxIncluded] = useAtom(taxIncludedAtom);

  return (
    <div>
      <p>価格: {price}円</p>
      <p>税込: {taxIncluded}円</p>
    </div>
  );
}

export default Price;
