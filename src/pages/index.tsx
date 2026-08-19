import type { NextPage } from 'next';
import { FloatingButtonStrip } from '../components/nav/FloatingButtonStrip';
import { TransferTokenCard } from '../features/transfer/TransferTokenCard';

const Home: NextPage = () => {
  return (
    <div className="space-y-3 pt-4">
      <div className="relative">
        <TransferTokenCard disabled />
        <FloatingButtonStrip />
      </div>
    </div>
  );
};

export default Home;
