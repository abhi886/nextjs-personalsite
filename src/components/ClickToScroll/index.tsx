import React from 'react';
import { Tooltip } from 'react-tooltip';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';

interface Props {
  linkUpward: string | null;
  linkDownward: string | null;
  tooltipUpMessage: string | null;
  tooltipDownMessage: string | null;
}
function ClickToScroll({
  linkUpward,
  linkDownward,
  tooltipUpMessage,
  tooltipDownMessage,
}: Props) {
  return (
    <div className="flex justify-center">
      {linkUpward && (
        <div>
          <a
            data-testid="upwardArrow"
            data-tooltip-id="upward-tooltip"
            data-tooltip-content={tooltipUpMessage && tooltipUpMessage}
            href={linkUpward}
            aria-label={`Up button to navigate to the ${linkUpward} section`}
          >
            <ChevronUpIcon className="h-8 cursor-pointer" />
          </a>
          <Tooltip id="upward-tooltip" />
        </div>
      )}

      {linkDownward && (
        <div>
          <a
            data-tooltip-id="downward-tooltip"
            data-tooltip-content={tooltipDownMessage && tooltipDownMessage}
            href={linkDownward}
            aria-label={`Down button to navigate to the ${linkDownward} section hover:text-red`}
          >
            <ChevronDownIcon className="h-8 cursor-pointer" />
          </a>
          <Tooltip id="downward-tooltip" />
        </div>
      )}
    </div>
  );
}

export default ClickToScroll;
