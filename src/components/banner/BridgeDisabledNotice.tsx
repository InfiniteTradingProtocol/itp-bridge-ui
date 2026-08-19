import { WarningIcon } from '@hyperlane-xyz/widgets';

export function BridgeDisabledNotice() {
  return (
    <div
      role="alert"
      className="rounded-2xl border border-amber-300 bg-amber-50 px-4 py-4 text-amber-950"
    >
      <div className="flex items-start gap-3">
        <WarningIcon width={22} height={22} className="mt-0.5 shrink-0" />
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Bridge temporarily disabled</h2>
          <p className="text-sm leading-6">
            We identified a security issue and have paused bridging and deposits until further
            notice. Please do not send funds or attempt deposits at this time.
          </p>
        </div>
      </div>
    </div>
  );
}
