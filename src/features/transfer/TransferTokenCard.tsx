import { Card } from '../../components/layout/Card';
import { BridgeDisabledNotice } from '../../components/banner/BridgeDisabledNotice';
import { TransferTokenForm } from './TransferTokenForm';

export function TransferTokenCard({ disabled = false }: { disabled?: boolean }) {
  return (
    <Card className="w-100 sm:w-[31rem]">
      {disabled ? <BridgeDisabledNotice /> : <TransferTokenForm />}
    </Card>
  );
}
